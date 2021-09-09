// each cart item needs to be increased/decreased in count and also be removed from cart. this component gets an item, shows it and adds above fnctionality to them using redux actions

// React
import React from 'react';


//Redux
import { connect } from 'react-redux';
import { addItem,decreaseItem,removeItem } from '../../redux/cart/cart.actions';

//comonents
import CustomButton from '../custom-button/custom-buton.component';

//styls
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
        <div className='remove-button' >
            <CustomButton  onClick={()=>{
                removeItem(item);
               console.log('REMOVE ACTION CALLED')
           }} >Remove</CustomButton>
        </div>
        
    </div>
)

// mapDispatchToProps dispatches data to redux store 
const mapDispathcToProps=dispatch=>({
    addItem:item => dispatch(addItem(item)),
    decreaseItem:item=>dispatch(decreaseItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})

//connect HOC wraps around component to redux
export default connect(null,mapDispathcToProps)(CheckoutItem);