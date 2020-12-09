import ITimeSeriesDataModel from "../../model/ITimeSeriesData";
import { IMyError } from "../../model/IMyError";
import {FETCH_REQUEST,FETCH_SUCCESS, FETCH_ERROR} from './Types'

export interface ITimeSeriesAction {
    type: typeof FETCH_REQUEST | typeof FETCH_SUCCESS | typeof FETCH_ERROR;
    payload: {
        data?: ITimeSeriesDataModel[]; 
        error?: IMyError;
    }
}