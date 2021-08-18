import React from 'react'
import './signin-out.styles.scss';
import SignIn from'../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInOut=()=>(
     <div className='sign-in-out'>
        <SignIn/>
        <SignUp/>
     </div>
)

export default SignInOut;