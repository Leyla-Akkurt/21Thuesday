import ProductContext from './ProductContext';
import {useState} from 'react'
import ProductList from './ProductList';
import CurrencyContext from './CurrencyContext';

function App() {
  const [products,setProducts]=useState([
    {
      name:"Chocolate",
      price:2
    },
    {
      name:"Coca cola",
      price:5
    },
    {
      name:"Water",
      price:7
    },{
      name:"Milk",
      price:8
    }
  ])
  return (
    <ProductContext.Provider value={{products}}>
        <CurrencyContext.Provider value={{currency: "$"}}>
            <ProductList/>
         </CurrencyContext.Provider>
    </ProductContext.Provider>
    
  );
}

export default App;
