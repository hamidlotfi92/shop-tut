import React from 'react';
import CustomButton from '../custom-button/custom-buton.component';
import './card.styles.scss';


const Cart=()=>(
    <div className='cart'>
        <div className='cart-items'/>
        <CustomButton>Go TO CHECKOUT</CustomButton>
    
    </div>
)

export default Cart;