import cart from '../../data/cart-oop.js';
import { getProduct,products } from '../../data/products.js';
import { formatCurrency } from '../../scripts/utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let trackingHTML='';


cart.cartItems.forEach((item) => {
const product = products.find(p => p.id === item.productId); 

      trackingHTML += `
      <div class="order-tracking">
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
       ${dayjs().format('MMMM D')}
      </div>

      <div class="product-info">
      ${product.name}
      </div>

      <div class="product-info">
        Quantity: ${item.quantity}
      </div>

      <img class="product-image" src="${product.image}">

      <div class="progress-labels-container">
        <div class="progress-label">
          Preparing
        </div>
        <div class="progress-label current-status">
          Shipped
        </div>
        <div class="progress-label">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
      </div>
      `;
});

document.querySelector('.order-tracking').innerHTML = trackingHTML; 

document.addEventListener('DOMContentLoaded', () => {
  cart.updateCartQuantity('.js-cart-quantity'); 
});
