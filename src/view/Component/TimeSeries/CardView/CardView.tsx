import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import ITimeSeriesDataModel from '../../../../model/ITimeSeriesData';
import './CardView.css';

interface ICardViewProps {
    data: ITimeSeriesDataModel[]
}
const CardView: React.FC<ICardViewProps> = (props) => {
    return (
        <React.Fragment>
            <div className="row">
            {props.data.map((item, index) => (                
                    <div className="col-lg-2 mb-2">
                        <Card key={index} className="card-view-contaier">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="card-view-item"><span>Date: {item.date}</span></ListGroup.Item>
                                <ListGroup.Item className="card-view-item"><span>Open: {item.open}</span></ListGroup.Item>
                                <ListGroup.Item className="card-view-item"><span>High: {item.high}</span></ListGroup.Item>
                                <ListGroup.Item className="card-view-item"><span>Low: {item.low}</span></ListGroup.Item>
                                <ListGroup.Item className="card-view-item"><span>Close: {item.close}</span></ListGroup.Item>
                                <ListGroup.Item className="card-view-item"><span>Volume: {item.volume}</span></ListGroup.Item>
                                <ListGroup.Item className="card-view-item"><span>Adj Close: {item.adjClose}</span></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>               
            ))
            }
            </div>
        </React.Fragment>
    )
}

export default CardView;