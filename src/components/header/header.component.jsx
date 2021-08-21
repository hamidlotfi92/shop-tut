import React from 'react';
//an HOC that lets this component connect to redux
import { connect } from 'react-redux';
import './header.style.scss'
import { Link } from 'react-router-dom';
import{ReactComponent as Logo} from  '../../assets/4.3 crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';

const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option 'to='/shop'>SHOP</Link>
            <Link className='option 'to='/shop'>CONTACT</Link>
            {
                //checks if any user has signed in to create either sign in link or sihn out button
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
           
            <CartIcon/>
            
            
        </div>
        {
            hidden ? null:<Cart/>
        }
        
        
    </div>
)

//this name is optional but it's standard with redux codebases.it returns an object with name of the property is the property we want to pass in, and value is the . state is rottReducer
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);