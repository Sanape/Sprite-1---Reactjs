import React, {Component} from 'react';
import CityPage from './ToCityPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Body extends Component{
    render(){
        return(
            <body>
               <CityPage srcImg={this.props.srcImg}/>
            </body>
        )
    }
}

export default Body;