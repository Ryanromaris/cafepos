import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
