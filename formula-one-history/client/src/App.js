import './App.css';
import Navigation from './Components/Navigation.js'
import Teams from './Components/Teams/Teams.js'
import DriverGrid from './Components/DriverGrid/DriverGrid.js'
import Results from './Components/Results/Results.js'
import Schedule from './Components/Schedule/Schedule.js'
import Home from './Components/Home/Home.js'

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
