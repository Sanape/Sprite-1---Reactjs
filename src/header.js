import React, {Component} from "react";
import './App.css';
import Image from 'react-bootstrap/Image';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  //import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <div className="image-container">
                    <center>
                    <Image src={this.props.srcImg} alt="MytineraryLogo"  fluid /*imagen de pantalla completa */ />
                    </center>
                </div>
                <center>
                <h3 className="display-3">
                    Find your perfect trip, designed by insiders who know and love cities.
                </h3>
                </center>
            </header>
        )
    }
}
 export default Header;