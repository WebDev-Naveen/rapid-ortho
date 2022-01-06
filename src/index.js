import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import FontStyle from './Font/FontStyle'



ReactDOM.render(
  <BrowserRouter>
    <FontStyle/>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);



