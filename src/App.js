import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';

function App() {

  return (
    <div className="App">
      <h1>Wheres Petr</h1>
      <input type="file"  accept="image/*" name="image" id="file" /> <br /><br />
      <ClickCounter name={"Maithy"}/>

    </div>
  );
}

export default App;
