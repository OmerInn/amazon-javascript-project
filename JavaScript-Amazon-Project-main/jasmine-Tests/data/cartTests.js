import cart from '../../data/cart-oop.js';

describe('Shopping Cart Tests', () => {
  beforeEach(() => {
    cart.loadFromStorage();
    cart.cartItems = [ 
      { productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', quantity: 2, deliveryOptionId: '1' },
      { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', quantity: 1, deliveryOptionId: '2' }
    ];
  });

  afterEach(() => {
    localStorage.clear();
    cart.cartItems = []; 
  });

  it('should add a new product to the cart', () => {
    cart.addToCart('new-product-id');
    expect(cart.cartItems.length).toBe(3);
    expect(cart.cartItems[2].productId).toBe('new-product-id');
    expect(cart.cartItems[2].quantity).toBe(1);
  });

  it('should increase quantity when adding the same product again', () => {
    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toBe(3);
  });

  it('should remove a product from the cart', () => {
    cart.removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems.length).toBe(1);
    expect(cart.cartItems[0].productId).toBe('15b6fc6f-327a-4ec4-896f-486349e85a3d');
  });

  it('should update quantity of a product', () => {
    cart.updateQuantity('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 4);
    expect(cart.cartItems[0].quantity).toBe(4);
  });

  it('should calculate the correct cart quantity', () => {
    const totalQuantity = cart.calculateCartQuantity();
    expect(totalQuantity).toBe(3);
  });
});
