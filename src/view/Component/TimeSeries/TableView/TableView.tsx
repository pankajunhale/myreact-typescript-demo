import React from 'react'
import { Table } from 'react-bootstrap';
import ITimeSeriesDataModel from '../../../../model/ITimeSeriesData';

interface ITableViewProps {
    data : ITimeSeriesDataModel[]
}
const TableView: React.FC<ITableViewProps> = (props) =>{
    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                        <th>Adj Close</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.open}</td>
                            <td>{item.high}</td>
                            <td>{item.low}</td>
                            <td>{item.close}</td>
                            <td>{item.volume}</td>
                            <td>{item.adjClose}</td>
                        </tr>
                    ))
                    }
                                      
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default TableView;