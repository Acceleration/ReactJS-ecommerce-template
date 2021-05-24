import toAdobeData from "./adobeData/toAdobeData"

export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const currentDigitalCart = window.digitalData.cart

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )
  currentDigitalCart.price.basePrice += cartItemToAdd.price

  if (existingCartItem) {
    currentDigitalCart.item.find(item => item.productID === cartItemToAdd.id).quantity++
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } :
        cartItem
    )

  }
  currentDigitalCart.item.push(toAdobeData({ ...cartItemToAdd, quantity: 1 }))
  console.log(currentDigitalCart, window.digitalData)
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )
  const currentDigitalCart = window.digitalData.cart
  currentDigitalCart.price.basePrice -= cartItemToRemove.price
  const cartItemToRemoveIdx = currentDigitalCart.item.findIndex((item, idx) => item.productID === cartItemToRemove.id)
  if (existingCartItem.quantity === 1) {
    currentDigitalCart.item.splice(cartItemToRemoveIdx, 1)

    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  const digitalDataItem = currentDigitalCart.item[cartItemToRemoveIdx]
  console.log(digitalDataItem)
  --currentDigitalCart.item[cartItemToRemoveIdx].quantity
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}