import './App.css';
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import Teams from './Components/Teams.js'

function App() {
  return (
    <div className="App font-raleway bg-white">
      <Header></Header>
      <div className="flex">
        <Navigation></Navigation>
        <Teams></Teams>
      </div>
    </div>
  );
};

export default App;
