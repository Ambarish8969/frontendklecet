import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// const myname = "Ambarish Bhagawati";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <BrowserRouter>
    {/* <h1>My Name is {myname}.</h1>
    <h1 contentEditable='true'>My Name is {myname}.</h1>
    <h1>Addition of 5 and 3 is : {5 + 3}</h1>
    <h2>CurrentDate is : {currDate} </h2>
    <h2>CurrentTime is : {currTime} </h2> */}
    <App />
  </BrowserRouter>, document.getElementById('root'));
