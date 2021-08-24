import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems,selectItemTotalCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { addItem,decreaseItem,removeItem } from '../../redux/cart/cart.actions';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage=({cartItems,cartItemTotal})=>(
    <div className='checkout-page'>

        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Dscriptio</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        <div>
            {
                cartItems.map(item=><CheckoutItem key={cartItemTotal.id} item={item} />)
            }
        
        </div>
        <div className='total'>
            <span>Total:{cartItemTotal}</span>
        </div>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    cartItemTotal:selectItemTotalCount
})
const mapDispathcToProps=dispatch=>({
    addItem:item => dispatch(addItem(item)),
    decreaseItem:item=>dispatch(decreaseItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})

export default connect(mapStateToProps,mapDispathcToProps)(CheckoutPage);