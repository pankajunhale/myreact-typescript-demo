import { IPagination } from "./IPagination";
import ITimeSeriesData from "./ITimeSeriesData";
import { ITimeSeriesResponse } from "./ITimeSeriesResponse";

export class TimeSeriesResponse implements ITimeSeriesResponse {
    data: ITimeSeriesData[];
    pagination: IPagination;

    constructor(listOfTimeSeriesData : ITimeSeriesData[] , myPagination : IPagination) {
        this.data = listOfTimeSeriesData;
        this.pagination = myPagination;
    }

}