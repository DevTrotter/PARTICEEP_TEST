import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { Bio } from './Page/Bio'
import store from './redux/store/index.js';

const Index = () => {
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/id/:slug' element={<Bio/>}/>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);
