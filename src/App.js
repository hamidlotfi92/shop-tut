
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import {Switch, Route,Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInOut from './pages/singin-out/signin-out.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  
  //a var to hold unsubscribe from authenticator when app is closed
  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    //checls if authentication state has changed in firebase
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      //checks if the authenticated user exist
     if(userAuth){
       //if it exist adds it to firebase DB and and sets it as current user.
        const userRef=await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }
          )
          
        })
     }
    //if it exist and is part of DB just sets it as current user
     setCurrentUser(userAuth);
    })
  }
  
  componentWillUnmount(){
    //unsubscribes from authenticator and closes the connection
    this.unsubscribeFromAuth();
  }

  render(){
     return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser ?(<Redirect to='/'/>):(<SignInOut/>)}/>
      </Switch>
      
    </div>
  )
  }
    
  
 
}

const mapStateToProps=({user})=>({
  currentUser :user.currentUser
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)( App);
