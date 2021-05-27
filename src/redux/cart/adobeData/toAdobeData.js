export default ({ id, price, quantity, imageUrl, name, category }) => ({
  ...(quantity && {
    price: {
      basePrice: price
    },
    quantity
  }),
  productInfo: {
    productID: id,
    productName: name,
    productImage: imageUrl
  },
  category: {
    primaryCategory: category
  }
})