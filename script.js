// Shopping Cart functionality
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const basketItemsList = document.getElementById('basket-items');

// Function to update the basket UI
function updateBasket() {
    basketItemsList.innerHTML = '';  // Clear the current list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product ${item.id}`;
        basketItemsList.appendChild(listItem);
    });
}

// Add event listeners to "Add to Basket" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.parentElement.getAttribute('data-id');
        cart.push({ id: productId });
        updateBasket();
    });
});

// Handle Checkout button
document.getElementById('checkout').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Your basket is empty.');
    } else {
        alert('Proceeding to checkout!');
    }
});

// Handle Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Logged in successfully!');
});

// Handle Sign-Up Form Submission
