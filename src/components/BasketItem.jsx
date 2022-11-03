import { useContext } from 'react';
import { ShopContext } from '../context';

export function BasketItem(props) {
  const {id, name, price, quantity, 
  } = props;

  const {
    removeFromBasket,
    changeQuantity,
  } = useContext(ShopContext);

  return <li className="collection-item">
    {name} x{quantity} = {price*quantity}₽
      
    <span className="secondary-content" onClick={ () => removeFromBasket(id) }>
      <i className="material-icons clear-good">close</i>
    </span>

    <span className="secondary-content quant" onClick={ () => changeQuantity(id,1) }>
      <i className="material-icons">add_circle_outline</i>
    </span>

    <span className="secondary-content quant">
      {quantity}
    </span>

    <span className="secondary-content quant" onClick={ () => changeQuantity(id,-1) }>
      <i className="material-icons">remove_circle_outline</i>
    </span>

  </li>
}