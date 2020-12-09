import ITimeSeriesDataModel from '../../model/ITimeSeriesData';
import { FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS, FetchRequestAction, TimeSeriesFetchRequestErrorAction, TimeSeriesFetchRequestSuccessAction} from './Types';
import {findAll} from '../../services/time-series/TimeSeriesService';
import { ITimeSeriesResponse } from '../../model/ITimeSeriesResponse';
import { IPagination } from '../../model/IPagination';
import { IMyError } from '../../model/IMyError';
import { MyError } from '../../model/MyError';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

const fetchTimeSeriesInfo = (pageIndex: number, pageSize: number): ThunkAction<{}, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): any => {
        try {
            dispatch(isFetchingTimeSeriesInfo(true));  
            const response: ITimeSeriesResponse = findAll(pageIndex,pageSize);      
            dispatch(fetchTimeSeriesInfoActionSuccess(response.data, response.pagination));
        } catch (error) {
            dispatch(isFetchingTimeSeriesInfo(false));  
            dispatch(fetchTimeSeriesInfoActionError(new MyError(error.message,error)))
        }
    }    
}

const fetchTimeSeriesInfoActionSuccess = (data: ITimeSeriesDataModel[], pagination : IPagination): TimeSeriesFetchRequestSuccessAction => {
 return { type: FETCH_SUCCESS, data , pagination};
};

const fetchTimeSeriesInfoActionError = (error: IMyError): TimeSeriesFetchRequestErrorAction => {
    return {type: FETCH_ERROR, error };
};

const isFetchingTimeSeriesInfo = (isFetching: boolean): FetchRequestAction => {
    return { type: FETCH_REQUEST, isFetching };
};

export {
    fetchTimeSeriesInfo
}