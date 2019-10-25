import React, {Component} from "react";

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
                <div className="full-container">
                    <img src="..\img\MYtineraryLogo.png" alt="MytineraryLogo" className="img-fluid" /*imagen de pantalla completa */ />
                </div>
                <h3 className="display-3">
                    Find your perfect trip, designed by insiders who know and love cities.
                </h3>
            </header>
        )
    }
}
 export default Header;