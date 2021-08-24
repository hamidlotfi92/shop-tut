import React from'react';
import {ReactComponent as ShoppingIcon} from '../../assets/11.1 shopping-bag.svg';
import './cart-idon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps=createStructuredSelector({
    itemCount: selectCartItemCount
})
export default connect(mapStateToProps,mapDispatchToProps)( CartIcon);