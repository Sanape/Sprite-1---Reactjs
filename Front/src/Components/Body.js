import React, {Component} from 'react';
import CityPage from './ToCityPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Container, Row} from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';



class Body extends Component{
    render(){
        return(
            <React.Fragment>
               <CityPage srcImg={this.props.srcImg}/>
            </React.Fragment>
        )
    }
}

export default Body;