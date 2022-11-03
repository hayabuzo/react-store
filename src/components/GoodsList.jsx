import { useContext } from "react";
import {GoodsItem} from "./GoodsItem";
import { ShopContext } from "../context";

export function GoodsList() {
  const { goods = [] } = useContext(ShopContext);
  
  if (!goods.length) return <h3>Nothing found</h3>
  return <div className="goods">
    {goods.map(item => (
      <GoodsItem key={item.id} {...item} />
    ))}
  </div>

}