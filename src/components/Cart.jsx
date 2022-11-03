import { useContext } from "react";
import { ShopContext } from '../context'

export function Cart (props) {
  const { order, handleBasketShow=Function.prototype } = useContext(ShopContext);
  const quantity = order.length;
  return <div className="cart pink white-text" onClick={handleBasketShow}>
    <i className="material-icons">shopping_cart</i>
    { !quantity ? null : 
    <span className="cart-quantity">
        {quantity}
    </span> }
  </div>

}