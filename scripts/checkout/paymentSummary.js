import { cart } from '../../data/cart.js'
import { getProduct } from '../../data/products.js'
import { getDeliveryOption } from '../../data/deliveryOptions.js';

export function renderPaymentSummary(){
    let totalCartItems = 0;
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalShippingCharges = 0;

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        let matchingProduct = getProduct(productId);
        
        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption = getDeliveryOption(deliveryOptionId);
        
        totalCartItems += cartItem.quantity;
        totalPrice += (matchingProduct.price.retail_price) * (cartItem.quantity);
        totalDiscount += (matchingProduct.price.sale_price) * (cartItem.quantity);
        totalShippingCharges +=  (deliveryOption.shippingPrice) * (cartItem.quantity);
    })
    const estimatedTax = (totalDiscount + totalShippingCharges) * (0.05)
    const orderTotal = totalDiscount + totalShippingCharges + estimatedTax;

    let paymentSummaryHTML = `
        <p class="order-summary">Order Summary</p>
        <div class="order-calculations-grid">
            <p>MRP(${totalCartItems === 0 ? 'No Items' : 
                totalCartItems === 1 ? '1 Item' : `${totalCartItems} Items`
            })</p>
            <p>&#8377; ${totalPrice}</p>
        </div>
        <div class="order-calculations-grid">
            <p>Discounted Price</p>
            <p>&#8377; ${totalDiscount}</p>
        </div>
        <div class="order-calculations-grid">
            <p>Shipping charges</p>
            <p>${totalShippingCharges === 0 ? 'FREE' : `&#8377; ${totalShippingCharges}`}</p>
        </div>
        <div class="order-calculations-grid">
            <p>Estimated tax(5%)</p>
            <p>&#8377; ${estimatedTax}</p>
        </div>
        <div class="order-calculations-grid">
            <p class="total">Order total:</p>
            <p class="total">&#8377; ${orderTotal}</p>
        </div>
        <button class="order-button">Place your order</button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}