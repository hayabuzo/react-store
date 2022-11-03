import {BasketItem} from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

export function BasketList() {

  const {
    order = [], handleBasketShow,
  } = useContext(ShopContext);

  const totalPrice = order.reduce( (sum, item) => {
    return sum + item.price * item.quantity;
  }, 0 );
  return <ul className="collection basket-list">
    <li className="collection-item active pink">Your cart</li>
    { order.length ? order.map( (item) => (
      <BasketItem key={item.id} {...item} />
    ) ) : <li className="collection-item">The cart is empty</li>}
    <li className="collection-item active pink">
      <button className="btn btn-small pink darken-4">checkout</button>
      <span className="total">Total price: {totalPrice}₽</span>
    </li>
    <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
  </ul>
}