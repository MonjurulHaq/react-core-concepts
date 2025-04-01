import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>This is a paragraph</p>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personStyle = {
    color: "pink",
    backgroundColor: "blue",
    border: "5px solid gray",
    margin:"10px",
    padding: "10px"
  }

  return (
    <div style={personStyle}>
      <h1>Name : Abdul Ali</h1>
      <h1>Age : 35</h1>
    </div>

  )
}

export default App;
