import React from 'react';
import logo from './img/MYtineraryLogo.png';
import link from './img/circled-right-2.png';
import home from './img/homeIcon.png'
import './App.css';
import Header from './header.js';
import Body from './body.js'
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(props) {
  return (
    <div>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
  </a> */}
        <Header srcImg={logo} />
        <Body srcImg={link} />
        <Footer srcImg={home}/>
    </div>
  );
}

export default App;
