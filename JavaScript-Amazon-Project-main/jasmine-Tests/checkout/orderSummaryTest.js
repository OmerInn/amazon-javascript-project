import cart from "../../data/cart-oop.js";

describe('Order Summary Test Suite', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));
    cart.loadFromStorage();
  });

  it('should initialize cart with default products if localStorage is empty', () => {
    cart.loadFromStorage();
    expect(cart.cartItems.length).toBe(2);
    expect(cart.cartItems[0].productId).toBe('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  });

  it('should add a product to the cart', () => {
    cart.addToCart('new-product-id');
    expect(cart.cartItems.length).toBe(3);
    expect(cart.cartItems[2].productId).toBe('new-product-id');
    expect(cart.cartItems[2].quantity).toBe(1);
  });

  it('should remove a product from the cart', () => {
    cart.addToCart('product-id-to-remove');
    cart.removeFromCart('product-id-to-remove');
    expect(cart.cartItems.length).toBe(2); 
  });

  it('should increase quantity when adding the same product again', () => {
    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(cart.cartItems[0].quantity).toBe(4); 
  });
});
