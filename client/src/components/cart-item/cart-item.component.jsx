//this component each item we have in cart.

// react
import React from 'react';

//styles
import './cart-item.styles.scss';

const CartItem=({item:{imageUrl,price, name,quantity}})=>(
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity}*${price}</span>
        </div>
    </div>
)

export default CartItem;