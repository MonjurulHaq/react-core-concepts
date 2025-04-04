import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names = ['Aziz', 'Rakib', 'Sakib', 'John', 'Ron']
  const products = [
    { name: "Photoshop", price: "56$" },
    { name: "ChatGPt", price: "40$" },
    { name: "Canva", price: "free" }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {names.map(name => <li>{name}</li>)}
        </ul>
        <Counter></Counter>
        <People></People>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handelCount = () => setCount(count + 1)
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function People() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setPeople(data));
  }, [])
  return(
    <div>
      <h3>Dynamic people count : {people.length}</h3>
      <ul>
        {people.map(people => <li>{people.name}</li>)}
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    color: "black",
    backgroundColor: "white",
    margin: "10px",
    padding: "10px",
    width: "200px"
  }
  const { name, price } = props.product
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <button>Buy me</button>
    </div>
  )
}



// function Person(props) {
//   const personStyle = {
//     color: "pink",
//     backgroundColor: "blue",
//     border: "5px solid gray",
//     margin:"10px",
//     padding: "10px"
//   }
//   console.log(props)
//   return (
//     <div style={personStyle}>
//       <h1>Name : {props.name}</h1>
//       <h1>Age : {props.age}</h1>
//     </div>
//   )
// }

export default App;
