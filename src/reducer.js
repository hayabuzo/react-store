export function reducer (state, {type, payload}) {
  switch(type) {
    case 'CLOSE_ALERT': return {
      ...state, 
      alertName:''
    }
    case 'REMOVE_FROM_BASKET': return {
      ...state, 
      order:state.order.filter( (el) => el.id !== payload.id ) 
    };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);
      let newOrder = null;
      if (itemIndex<0) { 
        const qItem = {...payload, quantity: 1};
        newOrder = [...state.order, qItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {...orderItem, quantity:orderItem.quantity+1}
          } else return orderItem;
        });
      }
      return {
        ...state, 
        order: newOrder, 
        alertName: payload.name
      };
    }
    case 'CHANGE_QUANTITY': {
      const newOrder = state.order.map((orderItem) => {
        if (orderItem.id === payload.itemId && (orderItem.quantity>0 || payload.val>0) ) {
          return {...orderItem, quantity:orderItem.quantity+payload.val}
        } else return orderItem;
      });
      return {
        ...state,
        order: newOrder
      }
    }
    case 'HANDLE_BASKET_SHOW': return {
      ...state,
      isBasketShow: !state.isBasketShow,
    }
    case 'SET_GOODS': return {
      ...state,
      goods: payload || [],
      loading: false,
    }


    default: return state;
  }

};