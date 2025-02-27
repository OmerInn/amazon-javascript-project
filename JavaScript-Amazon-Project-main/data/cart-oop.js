const cart = {
  cartItems: [], 

  loadFromStorage() {
     const storedCart = JSON.parse(localStorage.getItem('cart-oop'));
    this.cartItems = storedCart || []; 

    if (this.cartItems.length === 0) {
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  },
  
  saveToStorage() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },

  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId} select`);
    const quantity = quantitySelector ? Number(quantitySelector.value) : 1;

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: quantity,
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage(); 
  },

  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;

    this.saveToStorage();
  },

  calculateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity || 0;
    });
    
    return cartQuantity;
  },
  updateCartQuantity: function(selector) {
    const cartQuantity = this.calculateCartQuantity();
    document.querySelector(selector).innerHTML = cartQuantity;
  },

  updateQuantity(productId, newQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity = newQuantity;
    }

    this.saveToStorage();
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.deliveryOptionId = deliveryOptionId;
    }

    this.saveToStorage();
  }
};

cart.loadFromStorage();


export default cart;


export const { addToCart, removeFromCart, updateQuantity, loadFromStorage } = cart;