import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchTimeSeriesInfo } from '../../../state/timeseries/Actions';
import { ITimeSeriesState } from '../../../state/timeseries/ITimeSerieState';
import { ApplicationState } from '../../../store/StoreConfiguration';
import TableView from './TableView/TableView';
import * as Icon from 'react-bootstrap-icons';
import CardView from './CardView/CardView';
import { Button } from 'react-bootstrap';

interface State {
}
interface OwnProps {
}
interface DispatchProps {
    findTimeSeriesInfo: (pageIndex: number, pageSize: number) => void
}
interface StateProps {
    timeSeries: ITimeSeriesState
}

type AllProps = State & OwnProps & DispatchProps & StateProps;
const TimeSeriesContainer: React.FC<AllProps> = (props) => {
    const tableView = 'TABLE_VIEW';
    const cardView = 'CARD_VIEW';

    const [page, setPage] = useState(1);
    const [viewType, setViewType] = useState(tableView);
    const handlePrevious = () => {
        setPage(page - 1);
    }
    const handleNext = () => {
        setPage(page + 1);
    }
    const toggleView = (viewType: string) => {
        setViewType(viewType);
        setPage(1);
    }
    useEffect(() => {
        console.log('Component mounted');
        props.findTimeSeriesInfo(page, 10)
        console.log(props.timeSeries.data);
        return () => {
            console.log('Component will be unmount')
        }
    }, [page])
    return (
        <React.Fragment>
            <div>
                <div className="mr-12">
                    <Icon.Table onClick={() => toggleView(tableView)} className="mr-2"></Icon.Table>
                    <Icon.CardList onClick={() => toggleView(cardView)} className="mr-2" fontSize={20}></Icon.CardList>
                </div>
                {
                    <div>
                        { viewType === tableView &&
                            <TableView data={props.timeSeries.data}></TableView>
                        }
                        { viewType === cardView &&
                            <CardView data={props.timeSeries.data}></CardView>
                        }
                        <div>
                            <Button className="mr-2" onClick={() => handlePrevious()}>Previous</Button>
                            <Button className="mr-2" onClick={() => handleNext()}>Next</Button>
                        </div>
                    </div>
                }
                
                
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
    return {
        timeSeries: state.timeSeriesState.timeSeries
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
    return {
        findTimeSeriesInfo: (pageIndex: number, pageSize: number) => {
            dispatch(fetchTimeSeriesInfo(pageIndex, pageSize))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSeriesContainer);
