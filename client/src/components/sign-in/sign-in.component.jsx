// this component is usen in signInOut component and handles signing in process interface.


//React 
import React,{useState} from 'react'


//redux
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buton.component';

//styles
import './sign-in.styles.scss';



const SignIn= ({emailSignInStart, googleSignInStart} ) => {

    //since we use hooks we actulay don't need to use class in order to access state. use state is a hook that creates a state and a pure functions that sets that state
    const [userCredentials, setCredentials]= useState({email: '',password: ''});

    const {email, password} = userCredentials;


    const handleSubmit=async event => {
        event.preventDefault();
        
        emailSignInStart(email, password);
    }

    // handleChange used in the component to update the state with each change
    const handleChange = event => {
        const{value,name}=event.target;

        setCredentials({...userCredentials,[name]:value});
    }
        //googleSignInStart is defined in firebase library. yo can see the detailes in firebase utility
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name='email' value={email} required lable='email' handleChange={handleChange}/>
                    
                    <FormInput name='password' type="password" lable='password' value={password} handleChange={handleChange} required/>
                    <div>
                        <CustomButton type='submit' >SIGN IN</CustomButton>
                        
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )

    }
        
    

// mapDispatchToProps dispatches data to redux store 
const mapDispatchToProps =dispatch =>({
    googleSignInStart: () =>dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

//connect HOC wraps around component to redux
export default connect(null,mapDispatchToProps)(SignIn);