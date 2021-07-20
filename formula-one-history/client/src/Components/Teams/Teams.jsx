import Car from './Car.jsx';
import React from 'react';
import Title from '../Universal/Title.jsx';
import Loading from '../Universal/Loading.jsx';

function Teams() {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    fetch("/teams")
      .then((res) => res.json())
      .then((data) => setData(data.grid));
  });
  
    return (
        <Title pageTitle="Teams" searchBarText="Search for team or driver...">
          <div className="w-full grid xl:grid-cols-2 lg:gid-cols-1">
          
              {!data ?  <Loading></Loading> :  data.map(function(team, index){
                return (
                  <Car carName={team.teamName}
                    drivers={team.drivers}
                    carImage={team.carImage}
                    key={index}></Car>
                  )
                }) 
              } 
          </div>
        </Title>  
    );
  
}

export default Teams;