const cartButton = document.querySelector('[data-cart-button]');
const cartItemsContainer = document.querySelector('[data-cart-items-container]');

export function setupShoppingCart() {}

// Add items to cart
// Remove items from cart
// Show/hide cart button when it has no items or on
//     when it goes from 0 to 1 item
// Persist across multiple pages
// Calculate an accurate total
// Handle multiples of the same item added to cart

cartButton.addEventListener('click', () => {
    cartItemsContainer.classList.toggle('invisible');
});