import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/bg-effect.css';
import './font/stylesheet.css';

import Navbar from './Navbar.js';
import AddVaccine from './addVaccine.js';

import reportWebVitals from './reportWebVitals';

const vaccine = ReactDOM.createRoot(document.getElementById('vaccine'));

vaccine.render(
  <React.StrictMode>
  <Navbar/>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
