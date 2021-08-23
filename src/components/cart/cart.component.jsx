import React from 'react';
import CustomButton from '../custom-button/custom-buton.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import './card.styles.scss';
import {cartItemSelector, selectCartItems} from'../../redux/cart/cart.selectors'

const Cart=({cartItems})=>(
    <div className='cart'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
        }
        </div>
        <CustomButton>Go TO CHECKOUT</CustomButton>
    
    </div>
)


const mapStateToProps= (state) =>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(Cart) ;