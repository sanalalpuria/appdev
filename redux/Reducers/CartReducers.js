import * as Actions from '../Actions';

const CartReducers = (state = { cart:[] }, action) => {
  const { type, payload } = action;
  console.log('Payload -> ', payload);
  switch (type) {
    case Actions.ADD_TO_CART:
      return {
       
          ...state,
        cart:[...state.cart,payload],
      };
    case Actions.REMOVE_FROM_CART:
      return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            };
            case "ADD_OR_UPDATE_ITEM": {
                
                const exists = state.cart.some((item) => item.id === payload.id);
                if (exists) {
                  const cart = state.cart.map((item) =>
                    item.id === payload.id ? { ...item, quantity: item.quantity + 1 } :  { ...item, quantity: 1 }
                  );
                  return { ...state, cart };
                } else {
                  return {
                    ...state,
                    cart: [...state.cart, { ...payload ,quantity:1}]
                  };
                }
              }
      
     
    default:
      return state;
  }
};

export default CartReducers;