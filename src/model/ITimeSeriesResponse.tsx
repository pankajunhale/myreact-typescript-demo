import { IPagination } from "./IPagination";
import ITimeSeriesDataModel from "./ITimeSeriesData";

export interface ITimeSeriesResponse {
    data: Array<ITimeSeriesDataModel>;
    pagination: IPagination;
}