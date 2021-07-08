import './App.css';
import Header from './Components/Header.js'
import Car from './Components/Car.js'

function App() {
  const sender = 'React';

  return (
    <div className="App bg-gray-900">
      <Header></Header>
      <Car carName="Redbull Honda F1 Team"></Car>
      <Car></Car>
      <h1 >Hello from {sender}</h1>

    </div>
  );
}

export default App;
