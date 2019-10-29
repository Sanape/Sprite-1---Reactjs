import React from 'react';
import logo from './img/MYtineraryLogo.png';
import usuario from './img/Icono-Usuario.png'
import link from './img/circled-right-2.png';
import home from './img/homeIcon.png'
import './App.css';
import Header from './Header.js';
import Body from './Body.js'
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Image, Button, Nav } from 'react-bootstrap';



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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="justify-content-start">
            <Image src={usuario} alt="icono de usuario" className="d-inline-block align-left navbar-brand"  width="50"
        height="50"></Image>
          </Navbar.Brand>
          <Navbar.Toggle className="justify-content-end">
              <span class="navbar-toggler-icon "></span>
          </Navbar.Toggle>
        </Navbar>
        <Header srcLogo={logo}/>
        <Body srcImg={link} />
        <Footer srcImg={home}/>
    </div>
  );
}

export default App;
