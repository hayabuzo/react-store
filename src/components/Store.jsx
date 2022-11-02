import {useState, useEffect} from 'react'
import {API_KEY, API_LINK} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart'
import {BasketList} from './BasketList'
import { Alert } from './Alert'

export function Store () {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] =  useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const closeAlert = () => {
    setAlertName('');
  }

  const changeQuantity = (itemId, val) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId && (orderItem.quantity>0 || val>0) ) {
        return {...orderItem, quantity:orderItem.quantity+val}
      } else return orderItem;
    });
    setOrder(newOrder);
  }   

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    if (itemIndex<0) {
      const qItem = {...item, quantity: 1};
      setOrder([...order, qItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {...orderItem, quantity:orderItem.quantity+1}
        } else return orderItem;
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter( (item) => item.id!==itemId );
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect( function getGoods() {
    fetch(API_LINK, { headers: {'Authorization': API_KEY} })
    .then(response => response.json())
    .then(data => {
      data.featured && setGoods(data.featured);
      setLoading(false);
    })
  }, [] );

  return <main className="container content"> 
    <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
    { loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} /> } 
    { isBasketShow && <BasketList 
      order={order} 
      handleBasketShow={handleBasketShow} 
      removeFromBasket={removeFromBasket}
      changeQuantity={changeQuantity}
    /> }
    { alertName && <Alert name={alertName} closeAlert={closeAlert} />

    }
  </main>
}

