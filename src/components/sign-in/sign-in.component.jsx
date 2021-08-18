import React from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-buton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange=event=>{
        const{value,name}=event.target;

        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSnopubmit}>
                    <FormInput name='email' value={this.state.email} required lable='email' handleChange={this.handleChange}/>
                    
                    <FormInput name='password' lable='password' value={this.state.password} handleChange={this.handleChange} required/>
                    <div>
                        <CustomButton type='submit' >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )

    }
        
    
}

export default SignIn;