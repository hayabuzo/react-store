export function Cart (props) {
  const { quantity=0, handleBasketShow=Function.prototype } = props;
  return <div className="cart pink white-text" onClick={handleBasketShow}>
    <i className="material-icons">shopping_cart</i>
    { !quantity ? null : 
    <span className="cart-quantity">
        {quantity}
    </span> }
  </div>

}