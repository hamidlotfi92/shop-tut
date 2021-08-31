import React from 'react';
import CustomButton from '../custom-button/custom-buton.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import './card.styles.scss';
import { selectCartItems} from'../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
const Cart=({cartItems,history,dispatch})=>(
    <div>
        <div className='cart'>
            <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
                
             } >Go TO CHECKOUT</CustomButton>
        
        </div>
        
    </div>
    
)


const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    
})

//when we don't use dispatch in connect fnction, it will automaticaly add it to function. we just need to add "dispatch "parameter to function then the call it with action

export default withRouter(connect(mapStateToProps)(Cart)) ;