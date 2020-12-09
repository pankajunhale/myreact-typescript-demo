import { combineReducers, createStore, applyMiddleware  } from 'redux'
import timeSeriesState, { State as TimeSeriesState } from '../state/timeseries/Reducers';
import thunk from 'redux-thunk'

// The top-level state object
export interface ApplicationState {
    timeSeriesState: TimeSeriesState;
}

export default createStore(combineReducers<ApplicationState>({
    timeSeriesState
}), applyMiddleware(thunk))