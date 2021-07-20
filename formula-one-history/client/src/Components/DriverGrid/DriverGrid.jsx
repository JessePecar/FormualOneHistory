import React from 'react';
import Title from '../Universal/Title.jsx'

class DriverGrid extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Title pageTitle="Drivers" searchBarText="Search for driver or number...">
            
            </Title>
        );
    }
}

export default DriverGrid;