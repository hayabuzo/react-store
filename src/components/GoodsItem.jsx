import { useContext } from "react";
import { ShopContext } from "../context";

export function GoodsItem(props) {

  const {
    id,
    name,
    description,
    price,
    image,
  } = props;

  const {addToBasket} = useContext(ShopContext);

  return <div className="card" id={id}>
    <div className="card-image">
      <img src={image} alt={name}/>
      </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn pink darken-2" onClick={() => addToBasket({ id, name, price }) }>Buy</button>
        <span className="right" style={{ fontSize: '1.8rem'}}>{price}₽</span>
      </div>
    </div>

}