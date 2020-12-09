import ITimeSeriesDataModel from "../model/ITimeSeriesData";

export default interface ITimeSeriesViewModel {
    defaultViewType:string
    data: ITimeSeriesDataModel
    isDisplayPagination: boolean;
}