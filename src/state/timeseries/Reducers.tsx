import { combineReducers } from 'redux';
import { ITimeSeriesState } from './ITimeSerieState';
import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    FETCH_REQUEST,
    TimeSeriesAction
} from './Types';

const initialState: ITimeSeriesState = {
    isLoading: false,
    data: [],
    pagination: {
        totalPages : 0,
        totalResult: 0
    }
}

export interface State {
    timeSeries: ITimeSeriesState
}

const timeSeries = (state: ITimeSeriesState = initialState, action: TimeSeriesAction): ITimeSeriesState => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { 
                ...state, 
                isLoading: action.isFetching 
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: [...action.data],
                pagination : action.pagination
            }
        case FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                data: [],
                pagination: null
            }
         default:
             return state;
    }
}

export default combineReducers<State>({timeSeries});