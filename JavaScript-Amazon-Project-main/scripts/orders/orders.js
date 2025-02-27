
import cart from '../../data/cart-oop.js';
import { getProduct,products } from '../../data/products.js';
import { formatCurrency } from '../../scripts/utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


let ordersHTML = '';

cart.cartItems.forEach((item) => {
  const product = products.find(p => p.id === item.productId);
if (!product) {
  console.error(`Product with ID ${item.productId} not found`);
  return;
}

  ordersHTML += `
    <div class="order-container">
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${dayjs().format('MMMM D')}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${formatCurrency(product.priceCents*item.quantity)}</div>
          </div>
        </div>
         <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${product.id}</div> <!-- Burada sipariş ID'sini yazdırıyoruz -->
        </div>
      </div>

      <div class="order-details-grid">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-delivery-date">
            Arriving on: ${dayjs().add(7, 'days').format('MMMM D')}
          </div>
          <div class="product-quantity">
            Quantity: ${item.quantity}
          </div>
          <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>
        <div class="product-actions">
          <a href="tracking.html">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.orders-section').innerHTML = ordersHTML; 

document.addEventListener('DOMContentLoaded', () => {
  cart.updateCartQuantity('.js-cart-quantity');
});