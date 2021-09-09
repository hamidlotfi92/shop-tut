// this page only shows sign in and sign up compnents


//React
import React from 'react'


//componens
import SignIn from'../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


//stles
import './signin-out.styles.scss';



const SignInOut=()=>(
     <div className='sign-in-out'>
        <SignIn/>
        <SignUp/>
     </div>
)

export default SignInOut;