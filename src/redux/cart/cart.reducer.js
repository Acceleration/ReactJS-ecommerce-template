import CartActionTypes from './card.types.js';
import { addItemsToCart, removeItemFromCart } from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case 'CLEAR_CART':
            window.digitalData.cart = window.constructCart(String(Math.random()))
            return {
                ...state,
                cartItems: []
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            const digitalCart = window.digitalData.cart
            const itemBeingRemovedIdx = digitalCart.item.findIndex(item => item.productInfo.productID = action.payload.id)
            const totalBeingRemoved = digitalCart.item[itemBeingRemovedIdx].price.basePrice * digitalCart.item[itemBeingRemovedIdx].quantity
            console.log(totalBeingRemoved)
            digitalCart.price.basePrice -= totalBeingRemoved
            digitalCart.item.splice(itemBeingRemovedIdx, 1)

            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }

        default:
            return state;
    }
}

export default cartReducer;