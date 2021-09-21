import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Counter from './components/Counter/Counter';
import Countries from './components/Countries/Countries';

function App() {
  const products=[
    {name:'iphone',model:'13pro-max',price:'180000'},
    {name:'samsung',model:'S21-ultra',price:'150000'},
    {name:'oppo',model:'S17',price:'30000'},
    {name:'vivo',model:'P30',price:'70000'},
  ]
  return (
    <div className="App">
      {/* -----------counter componet----------  */}
      <Counter></Counter>

      {/*-----------product componet-----------*/}

     <h2>Latest Phone Details</h2>
    {
      products.map(product=> <Products
      name={product.name}
      model={product.model}
      price={product.price}
      ></Products>)
    } 
    
    {/*----------countries componet----------- */}
    <Countries></Countries>
    </div>
  );
}

export default App;
