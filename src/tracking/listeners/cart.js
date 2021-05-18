function trackAddToCart(event, eventsHistory) {
    window.dataLayer.push(...event);
    return event
}

// Allow `trackAddToCart` to listen only on `ADD_TO_CART` event
trackAddToCart.eventType = 'ADD_TO_CART';

function trackProductClick(event, eventsHistory) {
    window.dataLayer.push(...event);
    return event
}

// Allow `trackAddToCart` to listen only on `ADD_TO_CART` event
trackProductClick.eventType = 'PRODUCT_CLICK';

export default trackAddToCart;
export {
	trackProductClick
};
