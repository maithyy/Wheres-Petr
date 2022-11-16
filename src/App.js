import logo from './logo.svg';
import './App.css';
import RandomizePetr from './components/RandomizePetr';
import Upload from './components/DisplayImage';

function App() {

  return (
    <div className="App">
      <h1>Wheres Petr</h1>
      <RandomizePetr/>
      <Upload/>
    </div>
  );
}

export default App;
