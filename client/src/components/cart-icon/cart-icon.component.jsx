// this component is created due to the possiblity of being reused. else we coud just write extra code in header component. it toggles hidden state in redux store by toggleCartHidden action.

//react
import React from'react';


//redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';



//styles
import './cart-idon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/11.1 shopping-bag.svg';





const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

// mapDispatchToProps dispatches data to redux store 
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

// mapStateToProps gets data from redux store or selectors
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

//connect HOC wraps around component to redux
export default connect(mapStateToProps,mapDispatchToProps)( CartIcon);