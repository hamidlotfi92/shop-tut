import React from 'react';
import './header.style.scss'
import { Link } from 'react-router-dom';
import{ReactComponent as Logo} from  '../../assets/4.3 crown.svg'
import { auth } from '../../firebase/firebase.utils';

const Header=({currentUser})=>(
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
        </div>
    </div>
)
export default Header;