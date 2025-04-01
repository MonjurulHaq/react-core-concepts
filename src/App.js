import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: "Salam Uddin",
    age: 32
  }
  const person2 = {
    name : "Kalam Uddin",
    age: 47
  }
  var style = {
    color: 'blue',
    backgroundColor: 'yellow'
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>this is paragraph</p>
        <h2 style={style}>First person : {person.name}, {person.age}</h2>
        <h2 style={{color:'red', backgroundColor: 'tomato'}}>Second person : {person2.name}, {person2.age}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
export default App;
