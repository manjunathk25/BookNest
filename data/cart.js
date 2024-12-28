export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart = [
        {
            productId: 'txn-9x8w-zxy4-321v',
            quantity: 2,
            deliveryOptionId: '1'
        },
        {
            productId: 'txn-s99a-88vv-7766',
            quantity: 1,
            deliveryOptionId: '2'
        }
    ];
}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId){
    let matchingItem;
        cart.forEach((cartItem) => {
            if(cartItem.productId === productId){
                matchingItem = cartItem;
            }
        })
        if(matchingItem){
            matchingItem.quantity += 1;
        }
        else{
            cart.push({
                productId,
                quantity: 1,
                deliveryOptionId: '1'
            })
        }
        saveToStorage()
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveToStorage()
}