export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id ? {...cartItem,quantity : cartItem.quantity+1}: cartItem)
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    const itemIndex=cartItems.find(item=>item.id===cartItemToRemove.id);
    cartItems.splice(itemIndex,1);
    return cartItems;
}

export const decreaseItemFromCart=(cartItems,cartItemToDecrease)=>{

    return cartItems.map(cartItem=>cartItem.id===cartItemToDecrease.id && cartItemToDecrease.quantity>1 ? {...cartItem,quantity : cartItem.quantity-1}: cartItem)
}