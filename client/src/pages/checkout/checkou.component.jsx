//this page is showing cart and  provides increament,decreament and removefor added items also payment is in this page


//React

import React from 'react';

//redux
import { connect } from 'react-redux';
import { selectCartItems,selectCartTotalCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


//styles
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
                cartItems.map(item=><CheckoutItem key={item.id} item={item} />)
            }
        
        </div>
        <div className='total'>
        <span>Total:{cartItemTotal}</span>
        </div>
        <div className='test-warning'>PLEASE USE <br/>4242 4242 4242 <br/> AS CARD NUMBER AND ANY FUTURE DATE AND A 3 DIGIT CVV </div>
        <StripeCheckoutButton price={cartItemTotal}/>
    </div>
)

// mapStateToProps gets data from redux store or selectors
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartItemTotal:selectCartTotalCount
})

//connect HOC wraps around component to redux
export default connect(mapStateToProps)(CheckoutPage);