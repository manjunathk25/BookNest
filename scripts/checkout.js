import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let myCartHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    
    let matchingProduct;
    products.forEach((product) => {
        if(product.productId === productId){
            matchingProduct = product;
        }
    })

    myCartHTML += `
        <div class="checkout-product-grid">
            <div class="delivery-date">
                <p>Delivery date: Monday, December 9</p>
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
                        <p class="checkout-changes">Delete</p>
                    </div>
                </div>
    
                <div>
                    <div>
                        <p class="delivery-options">Choose a delivery option:</p>
                    </div>
                    <div class="options-grid">
                        <div class="option-grid">
                            <div>
                                <input type="radio" name="shipping" id="shipping">
                            </div>
                            <div>
                                <label class="date-options" for="shipping">Monday, December 9</label>
                                <p class="shipping-options">Free Shipping</p>
                            </div>
                        </div>
                        <div class="option-grid">
                            <div>
                                <input type="radio" name="shipping" id="shipping">
                            </div>
                            <div>
                                <label class="date-options" for="shipping">Tuesday, December 3</label>
                                <p class="shipping-options">&#8377;25-Shipping</p>
                            </div>
                        </div>
                        <div class="option-grid">
                            <div>
                                <input type="radio" name="shipping" id="shipping">
                            </div>
                            <div>
                                <label class="date-options" for="shipping">Friday, November 29</label>
                                <p class="shipping-options">&#8377;50-Shipping</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    `;
})

document.querySelector('.js-checkout-products-grid').innerHTML = myCartHTML;