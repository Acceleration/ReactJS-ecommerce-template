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
  currentDigitalCart.item.push({
    productID: cartItemToAdd.id,
    price: {
      basePrice: cartItemToAdd.price
    },
    quantity: 1
  })
  console.log(currentDigitalCart, window.digitalData)
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}