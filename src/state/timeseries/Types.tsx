
import ITimeSeriesDataModel from '../../model/ITimeSeriesData';
import { IPagination } from '../../model/IPagination';
import { IMyError } from '../../model/IMyError';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export interface FetchRequestAction {
    type: typeof FETCH_REQUEST,
    isFetching: boolean
}

export interface TimeSeriesFetchRequestSuccessAction {
    type: typeof FETCH_SUCCESS,
    data: ITimeSeriesDataModel[],
    pagination: IPagination
}

export interface TimeSeriesFetchRequestErrorAction {
    type: typeof FETCH_ERROR,
    error: IMyError
}

export type TimeSeriesAction = FetchRequestAction | TimeSeriesFetchRequestSuccessAction | TimeSeriesFetchRequestErrorAction;

