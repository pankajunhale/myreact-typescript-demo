import React from 'react';
import { IPagination } from '../../model/IPagination';

interface IPaginationProps {
    pagination: IPagination
    onPrevious: any;
    onNext: any;
    temp?: any;
}
const Pagination: React.FC<IPaginationProps> = (props) => {

    const handlePrevious = (value: number) => {
        props.onPrevious(value);
    }

    const handleNext = (value: number) => {
        props.onNext(value);
    }

    if (props.pagination.totalResult > 0) {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
    else {
        return null; // it is mandatory
    }

}
export default Pagination;

