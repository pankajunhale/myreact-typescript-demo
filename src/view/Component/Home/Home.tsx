import React from 'react';
import * as Icon from 'react-bootstrap-icons';
const Home = () => {
    const useTag = `<use xlink:href=#heart-fill />`;
    return (
        <React.Fragment>
            <Icon.Table className="mr-2"></Icon.Table>
            <Icon.CardList className="mr-2"  fontSize={20}></Icon.CardList>
        </React.Fragment>
    )
}

export default Home;