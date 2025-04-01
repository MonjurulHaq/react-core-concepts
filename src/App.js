import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>This is a paragraph</p>
        <Person name="Rakib Hossain" age="45"></Person>
        <Person name="Salman Khan" age="58"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    color: "pink",
    backgroundColor: "blue",
    border: "5px solid gray",
    margin:"10px",
    padding: "10px"
  }
  return (
    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>
    </div>
  )
}

export default App;
