// header component is mostly in charg of dom routing. 


// React
import React from 'react';


//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';
//components
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';


//styles this component uses styled library.
import { HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink } from './header.styles';
import{ReactComponent as Logo} from  '../../assets/4.3 crown.svg'





const Header=({currentUser,hidden, signOutStart})=>(
    <HeaderContainer >
        <LogoContainer to="/" >
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer >
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                //checks if any user has signed in to create either sign in link or sihn out button
                currentUser ?
                <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
           
            <CartIcon/>
            
            
        </OptionsContainer>
        { hidden ? null : <Cart/>}
    </HeaderContainer>
)

//this name is optional but it's standard with redux codebases.it returns an object with name of the property is the property we want to pass in, and value is the . state is rottReducer
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden,
})

// mapDispatchToProps dispatches data to redux store 
const mapDispatchToProps = dispatch =>({
    signOutStart: () => dispatch(signOutStart())
})

//connect HOC wraps around component to redux
export default connect(mapStateToProps,mapDispatchToProps)(Header);