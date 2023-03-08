const cartButton = document.querySelector('[data-cart-button]');
const cartItemsContainer = document.querySelector('[data-cart-items-container]');

const shoppingCart = [];

export function setupShoppingCart() {}

// Remove items from cart
// Show/hide cart button when it has no items or on
//     when it goes from 0 to 1 item
// Persist across multiple pages

cartButton.addEventListener('click', () => {
    cartItemsContainer.classList.toggle('invisible');
});

export function addToCart(id) {
    shoppingCart.push({
        id: id,
        quantity: 1
    });

    console.log(shoppingCart);
}

// Add items to cart
    // Handle click event for adding
    // Handle multiples of the same item added to cart
    // Calculate an accurate total
