import React from 'react';
import { addItem,decreaseItem,removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-buton.component';


import './checkout-itme.styles.scss';

const CheckoutItem=({item, addItem,removeItem,decreaseItem})=>
(
    <div className='checkout-item'>
    
        <div className='image-container'>
            <img  alt='item' src={item.imageUrl}/>
        </div>
        <span className='name'>{item.name}</span>
        <div className='quantity'>
            <i onClick={()=>decreaseItem(item)}>&#10094;</i>
                <span >{item.quantity}</span>
            <i onClick={()=>addItem(item)} >&#10095;</i>
        </div>
        <span className='price'>{item.price*item.quantity}$</span>
        <div className='remove-button'>
            <CustomButton onClick={()=>removeItem(item)} >Remove</CustomButton>
        </div>
        
    </div>
)

const mapDispathcToProps=dispatch=>({
    addItem:item => dispatch(addItem(item)),
    decreaseItem:item=>dispatch(decreaseItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})
export default connect(null,mapDispathcToProps)(CheckoutItem);