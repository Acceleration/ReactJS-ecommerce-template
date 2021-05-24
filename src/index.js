import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store.js';
import { getStoredState } from 'redux-persist'
import { persistConfig } from './redux/root-reducer'

import './index.css';
import App from './App';
import toAdobeData from './redux/cart/adobeData/toAdobeData.js';
getStoredState(persistConfig).then(prevStore => {
  const { cart } = prevStore
  const digitalCart = window.digitalData.cart
  console.log('this is the store: ', prevStore)
  const previousCartTotal = cart.cartItems.reduce((acc, cartItem) => {
    digitalCart.item.push(toAdobeData(cartItem))
    return acc + (cartItem.price * cartItem.quantity)
  }, 0)
  digitalCart.price.basePrice += previousCartTotal

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,

    document.getElementById("root")
  );

})


console.log('weird stuff: ', window.digitalData)