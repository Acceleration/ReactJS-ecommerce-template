export default ({ id, price, quantity }) => ({
  productID: id,
  price: {
    basePrice: price
  },
  quantity,
})