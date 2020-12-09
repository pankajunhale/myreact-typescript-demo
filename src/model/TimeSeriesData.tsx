import ITimeSeriesDataModel from "./ITimeSeriesData";

export class TimeSeriesData implements ITimeSeriesDataModel {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjClose: number;

    constructor(){
        this.date = '';
        this.open = 0;
        this.high = 0;
        this.low = 0;
        this.close = 0;
        this.volume = 0;
        this.adjClose = 0;
    }
    
} 