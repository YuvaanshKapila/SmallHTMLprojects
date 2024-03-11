let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  // Add more products as needed
];

let cart = [];
let total = 0;

function displayProducts() {
  const productsSection = document.getElementById('products');

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productItem.innerHTML = `
      <p>${product.name}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsSection.appendChild(productItem);
  });
}

function addToCart(productId) {
  const selectedProduct = products.find(product => product.id === productId);

  if (selectedProduct) {
    cart.push({ ...selectedProduct });
    total += selectedProduct.price;
    updateCart();
  }
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalElement = document.getElementById('total');

  // Clear previous items
  cartItems.innerHTML = '';

  // Populate the cart items
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    cartItems.appendChild(listItem);
  });

  // Update the total
  totalElement.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartSection = document.getElementById('cart');
  cartSection.style.display = cartSection.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  if (cart.length > 0) {
    alert(`Thank you for your purchase!\nTotal: $${total.toFixed(2)}`);
    // Clear the cart after checkout
    cart = [];
    total = 0;
    updateCart();
  } else {
    alert('Your cart is empty. Add some items before checking out.');
  }
}

// Display products when the page loads
displayProducts();
