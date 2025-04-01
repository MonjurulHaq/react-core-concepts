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
  return (
    <div>
      <h1>Name : Abdul Ali</h1>
      <h1>Age : 35</h1>
    </div>

  )
}

export default App;
