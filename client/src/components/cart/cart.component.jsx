// cart component is responsible for showin items is cart as well as reouting to chechout page by adding chechout to current history prop


//react
import React from 'react';


//components
import CustomButton from '../custom-button/custom-buton.component';
import CartItem from '../cart-item/cart-item.component';

//redux
import { connect } from 'react-redux';
import { selectCartItems} from'../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

//react router
import { withRouter } from 'react-router-dom';

//styles
import './card.styles.scss';



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

// mapStateToProps gets data from redux store or selectors
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    
})

//when we don't use dispatch in connect HOC, it will automaticaly add it to function. we just need to add "dispatch "parameter to function then the call it with action

export default withRouter(connect(mapStateToProps)(Cart)) ;