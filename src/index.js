import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'
ReactDOM.render(
  //provider is a class component from redux that when we pass store object in it, all it's children can  can connect with redux
  <Provider store={store}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);


