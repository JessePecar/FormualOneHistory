import './App.css';
import Navigation from './Components/Navigation.jsx'
import Teams from './Components/Teams/Teams.jsx'
import DriverGrid from './Components/DriverGrid/DriverGrid.jsx'
import Results from './Components/Results/Results.jsx'
import Schedule from './Components/Schedule/Schedule.jsx'
import Home from './Components/Home/Home.jsx'

import {
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App font-raleway bg-red-50">
        <div className="flex">
          <Navigation className=""></Navigation>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Teams" component={Teams}></Route>
          <Route path="/Drivers" component={DriverGrid}></Route>
          <Route path="/Schedule" component={Schedule}></Route>
          <Route path="/Results" component={Results}></Route>
          
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
