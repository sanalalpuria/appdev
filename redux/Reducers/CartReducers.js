import * as Actions from '../Actions';

const CartReducers = (state = [], action) => {
    switch (action.type) {
        case Actions.ADD_TO_CART:
            return [...state, action.payload]
        case Actions.REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.id !== action.payload.id)
    }

    return state
}

export default CartReducers ;