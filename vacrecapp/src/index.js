import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/bg-effect.css';
import './font/stylesheet.css';

import Navbar from './Navbar.js';
import Datatable from './Datatables.js';
import BackgroundImage from './background-effect.js';
import Backtotoptext from './backtotoptext.js';
import Backtotopbutton from './backtotopbutton.js';
import AddVaccine from './addVaccine.js';
import VaccineHistory from './addVaccine.js';

import reportWebVitals from './vaccineHistory';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Navbar/>  
  <BackgroundImage>

  </BackgroundImage> 
{/*   <VaccineHistory/> */}
  <Backtotoptext/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
