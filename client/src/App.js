
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkou.component';
import {Switch, Route,Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInOut from './pages/singin-out/signin-out.component';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

import {checkUserSession} from './redux/user/user.actions'

const App = ({checkUserSession, currentUser}) => {
  
  //a var to hold unsubscribe from authenticator when app is closed
  // unsubscribeFromAuth=null;

    useEffect(() =>{
      checkUserSession()
    },[checkUserSession])
    
    // checkUserSession();
    //the following commented code is for when we dont want to refactor code and move user authentication to sagas
    // //checls if authentication state has changed in firebase
    // this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    //   //checks if the authenticated user exist
    //  if(userAuth){
    //    //if it exist adds it to firebase DB and and sets it as current user.
    //     const userRef = await createUserProfileDocument(userAuth);
    //      userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         }
    //       )
          
    //     })
    //  }
    // //if it exist and is part of DB just sets it as current user
    //  setCurrentUser(userAuth);
   
  
  
  // componentWillUnmount(){
  //   //unsubscribes from authenticator and closes the connection
  //   this.unsubscribeFromAuth();

  // }

 
     return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>currentUser ?(<Redirect to='/'/>):(<SignInOut/>)}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
      
    </div>
  )
  }
    
  
 


const mapStateToProps=createStructuredSelector({
  currentUser :selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)( App);
