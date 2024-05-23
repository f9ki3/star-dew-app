import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


const section1 = ReactDOM.createRoot(document.getElementById('section1'));
section1.render(
  <React.StrictMode>
    <Section1 />
  </React.StrictMode>
);

const section2 = ReactDOM.createRoot(document.getElementById('section2'));
section2.render(
  <React.StrictMode>
    <Section2 />
  </React.StrictMode>
);

const section3 = ReactDOM.createRoot(document.getElementById('section3'));
section3.render(
  <React.StrictMode>
    <Section3 />
  </React.StrictMode>
);