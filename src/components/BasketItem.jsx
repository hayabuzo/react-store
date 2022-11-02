export function BasketItem(props) {
  const {id, name, price, quantity, 
    removeFromBasket=Function.prototype,
    changeQuantity=Function.prototype,
  } = props;
  return <li className="collection-item">
    {name} x{quantity} = {price*quantity}₽
      
    <span class="secondary-content" onClick={ () => removeFromBasket(id) }>
      <i class="material-icons clear-good">close</i>
    </span>

    <span class="secondary-content quant" onClick={ () => changeQuantity(id,1) }>
      <i class="material-icons">add_circle_outline</i>
    </span>

    <span class="secondary-content quant">
      {quantity}
    </span>

    <span class="secondary-content quant" onClick={ () => changeQuantity(id,-1) }>
      <i class="material-icons">remove_circle_outline</i>
    </span>

  </li>
}