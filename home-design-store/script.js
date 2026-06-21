// cart.js - Handling cart functionality

let cart = JSON.parse(localStorage.getItem('luxeDecorCart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart count in header
    updateCartCount();

    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const name = card.querySelector('h3').innerText;
            const priceText = card.querySelector('.price').innerText;
            const price = parseFloat(priceText.replace('$', ''));
            
            addToCart(name, price);
        });
    });
});

function addToCart(name, price) {
    const item = {
        id: Date.now(),
        name: name,
        price: price
    };
    
    cart.push(item);
    localStorage.setItem('luxeDecorCart', JSON.stringify(cart));
    updateCartCount();
    
    alert(`${name} added to cart!`);
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.nav-icons .icon:nth-child(2)');
    if (cartCountElement) {
        cartCountElement.innerText = `🛒 (${cart.length})`;
    }
}

// Function to clear cart (used on checkout completion)
function clearCart() {
    localStorage.removeItem('luxeDecorCart');
    cart = [];
    updateCartCount();
}

// Function to get cart data for checkout page
function getCartData() {
    return JSON.parse(localStorage.getItem('luxeDecorCart')) || [];
}
