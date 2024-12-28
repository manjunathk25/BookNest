import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../data/deliveryOptions.js';

let myCartHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    
    let matchingProduct;
    products.forEach((product) => {
        if(product.productId === productId){
            matchingProduct = product;
        }
    })

    const deliveryOptionID = cartItem.deliveryOptionId;

    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionID){
            deliveryOption = option;
        }
    })
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    myCartHTML += `
        <div class="checkout-product-grid js-checkout-product-${matchingProduct.productId}">
            <div class="delivery-date">
                <p>Delivery date: ${dateString}</p>
            </div>
            <div class="checkout-details-grid">
                <div>
                    <img src="${matchingProduct.image}" alt="book">
                </div>
    
                <div>
                    <p class="product-name">${matchingProduct.name}</p>
                    <div class="price-grid">
                        <p class="price1">&#8377; ${matchingProduct.price.sale_price}</p>
                        <p class="price2">&#8377; ${matchingProduct.price.retail_price}</p>
                    </div>
                    <div class="checkout-changes-grid">
                        <p class="quantity">Quantity: ${cartItem.quantity}</p>
                        <p class="checkout-changes">Update</p>
                        <p class="checkout-changes js-delete-link" data-product-id="${matchingProduct.productId}">Delete</p>
                    </div>
                </div>
    
                <div>
                    <div>
                        <p class="delivery-options">Choose a delivery option:</p>
                    </div>
                    <div class="options-grid">
                        ${deliveryOptionsHTML(matchingProduct, cartItem)}
                    </div>
                 </div>
            </div>
        </div>
    </div>
    `;
})

function deliveryOptionsHTML(matchingProduct, cartItem){
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');
        const priceString = deliveryOption.shippingPrice === 0 
        ? 'FREE'
        : `&#8377; ${deliveryOption.shippingPrice}`;
        
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
        html +=
            `
                <div class="option-grid">
                    <div>
                        <input type="radio" ${isChecked ? 'checked' : ''} name="delivery-option-${matchingProduct.productId}">
                    </div>
                    <div>
                        <label class="date-options" for="shipping">${dateString}</label>
                        <p class="shipping-options">${priceString} - Shipping</p>
                    </div>
                </div>   
            `;
    });
    return html;
}

document.querySelector('.js-checkout-products-grid').innerHTML = myCartHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const checkoutProductGrid = document.querySelector(`.js-checkout-product-${productId}`);
        checkoutProductGrid.remove();
    })
})