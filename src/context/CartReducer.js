import { ADD_TO_CART, REMOVE_ITEM } from "./Types";


const CartReducer = (state, action) => {

    switch(action.type){
     
        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payLoad],
            };
           
            
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payLoad),
            };
        }
        default:
        return state
    }

}

export default CartReducer