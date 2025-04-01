import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: "Photoshop", price: "56$"},
    {name: "Illustrator", price: "40$"},
    {name: "Canva", price: "free"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    color: "black",
    backgroundColor: "white",
    margin: "10px",
    padding: "10px",
    width: "200px"    
  }
  return(
    <div style={productStyle}>
        <h2>{props.name}</h2>
        <h4>Price: {props.price}</h4>
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
