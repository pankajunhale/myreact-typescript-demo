import { IPagination } from "../../model/IPagination";
import ITimeSeriesDataModel from "../../model/ITimeSeriesData";

export interface ITimeSeriesState {
    isLoading: boolean
    data : ITimeSeriesDataModel[];
    pagination?: IPagination | null;
}