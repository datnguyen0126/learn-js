// checkout.js - Handling checkout page logic

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutForm = document.getElementById('checkout-form');

    const cart = JSON.parse(localStorage.getItem('luxeDecorCart')) || [];

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        cartTotalAmount.innerText = '$0.00';
        document.querySelector('.checkout-btn').disabled = true;
        document.querySelector('.checkout-btn').style.opacity = '0.5';
        document.querySelector('.checkout-btn').style.cursor = 'not-allowed';
        return;
    }

    renderCart();

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real app, you'd process payment here
        alert('Thank you for your purchase! Your order is on its way.');
        
        // Clear cart and redirect
        localStorage.removeItem('luxeDecorCart');
        window.location.href = 'index.html';
    });
});

function renderCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const cart = JSON.parse(localStorage.getItem('luxeDecorCart')) || [];
    
    let total = 0;
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItemsList.appendChild(itemElement);
        total += item.price;
    });

    cartTotalAmount.innerText = `$${total.toFixed(2)}`;

    // Add remove functionality
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('luxeDecorCart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('luxeDecorCart', JSON.stringify(cart));
    renderCart();
}
