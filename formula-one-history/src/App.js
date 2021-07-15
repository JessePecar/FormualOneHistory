import './App.css';
import Navigation from './Components/Navigation.js'
import Teams from './Components/Teams.js'
import DriverGrid from './Components/DriverGrid/DriverGrid.js'
import Results from './Components/Results/Results.js'
import Schedule from './Components/Schedule/Schedule.js'

import {
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App font-raleway bg-gray-200">
        <div className="flex">
          <Navigation className="sm:invisible"></Navigation>
          <Route exact path="/" component={Teams}></Route>
          <Route path="/Home" component={Teams}></Route>
          <Route path="/Drivers" component={DriverGrid}></Route>
          <Route path="/Schedule" component={Schedule}></Route>
          <Route path="/Results" component={Results}></Route>
          
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
