import React,{ useState } from'react';
import './sign-up.styles.scss';
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buton.component';
import {signUpStart} from '../../redux/user/user.actions'



const SignUp = ({signUpStart}) => {
    
    const [userCredentials, setCredentials]= useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });
       
     const {displayName, email, password, confirmPassword}=userCredentials;
    const handleSubmit=async event=>{
        event.preventDefault();
       
        
        
        if(password!==confirmPassword){
            alert("Passwords don't match")
        }
            signUpStart(email,password,displayName);
            // const {user}=await auth.createUserWithEmailAndPassword(email,password);
            // await createUserProfileDocument(user,{displayName});
            
       
    }

    const handleChange=event=>{
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
 

const mapDispatchToPtops = dispatch =>({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null,mapDispatchToPtops)(SignUp);