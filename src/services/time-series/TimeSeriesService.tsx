import mockData from '../../mock-data/TimeSeriesMockData';
import ITimeSeriesDataModel from '../../model/ITimeSeriesData';
import { TimeSeriesData } from '../../model/TimeSeriesData';
import _ from 'lodash';
import { ITimeSeriesResponse } from '../../model/ITimeSeriesResponse';
import { TimeSeriesResponse } from '../../model/TimeSeriesResponse';
import { Pagination } from '../../model/Pagination';


const findAll = (pageIndex: number, pageSize: number): ITimeSeriesResponse => {
    console.log(pageIndex);
    const result = _(mockData)
        .drop((pageIndex - 1) * pageSize)
        .take(pageSize)
        .value();
    const list = new Array<ITimeSeriesDataModel>();
    result.map((item) => {
        list.push(getTimeSeriesItem(item))
    });
    const pagination = new Pagination(Math.ceil(result.length/pageSize),result.length);
    const obj = new TimeSeriesResponse(list,pagination);
    return obj;
}

const getTimeSeriesItem = (item: any): ITimeSeriesDataModel => {
    const obj = new TimeSeriesData();
    obj.date = item.Date;
    obj.open = item.Open;
    obj.high = item.High;
    obj.low = item.Low;
    obj.close = item.Close;
    obj.volume = item.Volume;
    obj.adjClose = item['Adj Close'];
    return obj;
}

export {
    findAll
}