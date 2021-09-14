// each cart item needs to be increased/decreased in count and also be removed from cart. this component gets an item, shows it and adds above fnctionality to them using redux actions

// React
import React from 'react';


//Redux
import { connect } from 'react-redux';
import { addItem,decreaseItem,removeItem } from '../../redux/cart/cart.actions';

//styls
import './checkout-itme.styles.scss';

const CheckoutItem=({item, addItem,removeItem,decreaseItem})=>{
    const {imageUrl, name, quantity, price} = item;
    return(
        <div className='checkout-item'>
        
            <div className='image-container'>
                <img  alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItem(item)}>
                &#10094;
                </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(item)}>
                &#10095;
            </div>
            </span>
            <span className='price'>{price}$</span>
            <div className='remove-button' onClick={() => removeItem(item)}>
            &#10005;
            </div>
        </div>
)};

// mapDispatchToProps dispatches data to redux store 
const mapDispathcToProps=dispatch=>({
    addItem:item => dispatch(addItem(item)),
    decreaseItem:item=>dispatch(decreaseItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})

//connect HOC wraps around component to redux
export default connect(null,mapDispathcToProps)(CheckoutItem);