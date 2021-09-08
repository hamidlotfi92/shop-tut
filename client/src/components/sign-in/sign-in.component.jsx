import React,{useState} from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-buton.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
 

const SignIn= ({emailSignInStart, googleSignInStart} ) => {

    const [userCredentials, setCredentials]= useState({email: '',password: ''});

    const {email, password} = userCredentials;
    const handleSubmit=async event => {
        event.preventDefault();
        
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const{value,name}=event.target;

        setCredentials({...userCredentials,[name]:value});
    }
    
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
        
    


const mapDispatchToProps =dispatch =>({
    googleSignInStart: () =>dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null,mapDispatchToProps)(SignIn);