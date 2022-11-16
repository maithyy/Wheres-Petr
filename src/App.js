import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import RandomizePetr from './components/RandomizePetr';

function App() {

  return (
    <div className="App">
      <h1>Wheres Petr</h1>
      <input type="file"  accept="image/*" name="image" id="file" /> <br /><br />
      <RandomizePetr/>

    </div>
  );
}

export default App;
