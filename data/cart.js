export let cart = [
    {
        productId: 'txn-9x8w-zxy4-321v',
        quantity: 2
    },
    {
        productId: 'txn-s99a-88vv-7766',
        quantity: 1
    }
];

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
                quantity: 1
            })
        }
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })
    cart = newCart;
}