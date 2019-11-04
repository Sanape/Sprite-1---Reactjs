import React, {Component} from "react";
import '../App.css';
import {Image,Container,Row} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className="App-header">
                <div className="image-container">
                        <Image className="App-logo" src={this.props.srcLogo} alt="MytineraryLogo" fluid/>
                </div>
                <center>
                            <h5 className="display-5">
                                Find your perfect trip, designed by insiders who know and love cities.
                            </h5>
                </center>
            </header>
        )
    }
}
 export default Header;