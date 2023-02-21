import {useContext} from "react"
import CurrencyContext from './CurrencyContext'

function Product({name,price}) {
   const {currency}=useContext(CurrencyContext);
   console.log(currency)
  return (
    <div>Name: {name} {price} {currency}</div>
  )
}

export default Product