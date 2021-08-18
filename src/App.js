
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import {Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInOut from './pages/singin-out/signin-out.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
     return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInOut}/>
      </Switch>
      
    </div>
  )
  }
    
  
 
}

export default App;
