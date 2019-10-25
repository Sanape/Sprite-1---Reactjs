import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Body from './body.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(props) {
  return (
    <div>
      {JSON.stringify(props.data)}
        {/*<img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
  </a> */}
        <Header srcImg="..\img\MYtineraryLogo.png" />
        <Body srcImg="..\img\circled-right-2.png"/>
    </div>
  );
}

export default App;
