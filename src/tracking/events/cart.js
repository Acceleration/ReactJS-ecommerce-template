function getAddToCartEvent(id, price) {
	return {
		type: 'ADD_TO_CART',
		data: {
			id: id,
			price: price
		}
	}
  };


export default getAddToCartEvent;