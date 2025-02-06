export const deliveryOptions = [
    {   
        id: '1',
        deliveryDays: 7,
        shippingPrice: 0
    },
    {   
        id: '2',
        deliveryDays: 3,
        shippingPrice: 25
    },
    {   
        id: '3',
        deliveryDays: 1,
        shippingPrice: 50
    }
]

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    })
    return deliveryOption;
}