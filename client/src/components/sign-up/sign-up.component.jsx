// this component is sed in signInOut page and is in chanre og signing up.


//React
import React,{ useState } from'react';

//redux
import {connect} from 'react-redux'
import {signUpStart} from '../../redux/user/user.actions'

//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buton.component';

//styles
import './sign-up.styles.scss';


// uses hooks so we don't use class to access state
const SignUp = ({signUpStart}) => {
    
    //usestate is a hook to create a state and pure function to change that
    const [userCredentials, setCredentials]= useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });
       
     const {displayName, email, password, confirmPassword}=userCredentials;

    const handleSubmit = async event=>{
        event.preventDefault();
       
        
        
        if(password!==confirmPassword){
            alert("Passwords don't match")
        }
            // starts the sgn up process.
            signUpStart(email,password,displayName);
            // const {user}=await auth.createUserWithEmailAndPassword(email,password);
            // await createUserProfileDocument(user,{displayName});
            
       
    }


    const handleChange = event=>{
        const {name,value}=event.target;
        setCredentials({...userCredentials,[name]:value});
    }
    
        
        return(
            <div className='sign-up'>
                <h2 className='title'> I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        lable='Display name'
                        required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    lable='Email'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    lable='Password'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    lable='Confirm password'
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
 
// mapDispatchToProps dispatches data to redux store 
const mapDispatchToPtops = dispatch =>({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

//connect HOC wraps around component to redux
export default connect(null,mapDispatchToPtops)(SignUp);