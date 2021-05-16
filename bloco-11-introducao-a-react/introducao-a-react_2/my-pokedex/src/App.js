import data from './data';
import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex  data={data} />
    </div>
  );
}

export default App;
