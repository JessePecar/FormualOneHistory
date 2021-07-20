
import Title from '../Universal/Title.jsx'
import RaceResult from './RaceResult.jsx'
import React from 'react'
import Loading from '../Universal/Loading.jsx';

function Results(){
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
      fetch("/results")
        .then((res) => res.json())
        .then((data) => setData(data.raceResults));
    });
    
    return (
        <Title pageTitle="Race Results" searchBarText="Search for Race...">
            {!data ? <Loading></Loading>  : <RaceResult races={data}></RaceResult>}
        </Title>
    );
    
}

export default Results;