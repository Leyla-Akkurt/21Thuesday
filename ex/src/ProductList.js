import {useContext} from 'react'
import Product from './Product';
import ProductContext from './ProductContext';

function ProductList() {
    const {products} = useContext(ProductContext);
    console.log(products);
     
  return (
    <>
    {
        products.map((product) => {
            return (
                <Product name={product.name} price={product.price} />
               
            )
        })
    }
    </>
  )
}

export default ProductList