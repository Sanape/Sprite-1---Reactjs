import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Image from 'react-bootstrap/Image';
  //import 'bootstrap/dist/css/bootstrap.min.css';

  class CityPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row justify-content-center">
                <center>
                    <h1 className="display-1">Start Browsing</h1>
                    <Image src={this.props.srcImg} alt="Link" thumbnail/>
                </center>
            </div>
        )
    }
  }

  

  
export default CityPage;