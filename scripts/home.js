let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="product-preview-grid">
            <div class="product-picture">
                <img src="${product.image}" alt="book">
            </div>
            <div class="product-info-grid">
                <p class="product-name">${product.name}</p>
                <p class="product-author">by ${product.author}</p>
                <div class="ratings-grid">
                    <div>
                        <img class="rating-stars" src="${product.ratings.stars}" alt="rating">
                    </div>
                    <p class="no-customers-rated">(${product.ratings.no_of_customers})</p>
                </div>
                <div class="price-grid">
                    <p class="price1">&#8377; ${product.price.sale_price}</p>
                    <p class="price2">&#8377; ${product.price.retail_price}</p>
                    <p class="discount">(${product.price.discount_percentage} % off)</p>
                </div>
                <div class="quantity">
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <button class="add-to-cart-button">Add to Cart</button>
            </div>
        </div>`
})

let productsElement = document.querySelector(".js-products-grid");
productsElement.innerHTML = productsHTML;
