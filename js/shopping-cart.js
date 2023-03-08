import formatCurrency from "./formatCurrency";
import items from '../items.json';

const cartButton = document.querySelector('[data-cart-button]');
const cartContainer = document.querySelector('[data-cart-container]');

const shoppingCart = [];

const IMAGE_URL = 'https://dummyimage.com/210x130';
const cartItemTemplate = document.querySelector('#cart-item-template');
const cartItemsContainer = document.querySelector('[data-cart-items]');

    export function setupShoppingCart() {}

// Remove items from cart
// Show/hide cart button when it has no items or on
//     when it goes from 0 to 1 item
// Persist across multiple pages

cartButton.addEventListener('click', () => {
    cartContainer.classList.toggle('invisible');
});

export function addToCart(id) {
    const itemInCart = shoppingCart.find(entry => entry.id === id);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        shoppingCart.push({
            id: id,
            quantity: 1
        });
    }

    showItemsInCart();
}

function showItemsInCart() {
    cartItemsContainer.innerHTML = '';

    shoppingCart.forEach(entry => {
        console.log(entry, items);
        const item = items.find(i => entry.id === i.id);
        const cartItem = cartItemTemplate.content.cloneNode(true);

        const itemContainer = cartItem.querySelector('[data-item]');
        itemContainer.dataset.itemId = item.id;

        const name = cartItem.querySelector('[data-name]');
        name.innerText = item.name;

        const image = cartItem.querySelector('[data-image]');
        image.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

        if (entry.quantity > 1) {
            const quantity = cartItem.querySelector('[data-quantity]');
            quantity.innerHTML = `&times;${entry.quantity}`;
        }

        const price = cartItem.querySelector('[data-price]');
        price.innerText = formatCurrency(item.priceCents * entry.quantity / 100);

        cartItemsContainer.appendChild(cartItem);
    });
}

    // Handle multiples of the same item added to cart
    // Calculate an accurate total
