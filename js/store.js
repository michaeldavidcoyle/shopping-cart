import items from '../items.json';
import formatCurrency from "./formatCurrency";
import {addToCart} from "./shopping-cart";

const storeItemTemplate = document.querySelector('#store-item-template');
const storeItemContainer = document.querySelector('[data-store-container]');
const IMAGE_URL = 'https://dummyimage.com/420x260';

export function setupStore() {
    document.addEventListener('click', event => {
        if (event.target.matches('[data-add-to-cart-btn]')) {
            const id = event.target.closest('[data-store-item]').dataset.itemId;
            addToCart(+id);
        }
    });

    items.forEach(renderStoreItem);
}

function renderStoreItem(item) {
    const storeItem = storeItemTemplate.content.cloneNode(true);

    const itemContainer = storeItem.querySelector('[data-store-item]');
    itemContainer.dataset.itemId = item.id;

    const name = storeItem.querySelector('[data-name]');
    name.innerText = item.name;

    const category = storeItem.querySelector('[data-category]');
    category.innerText = item.category;

    const image = storeItem.querySelector('[data-image]');
    image.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

    const price = storeItem.querySelector('[data-price]');
    price.innerText = formatCurrency(item.priceCents / 100);

    storeItemContainer.appendChild(storeItem);
}