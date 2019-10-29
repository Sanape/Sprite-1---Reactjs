import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Image from 'react-bootstrap/Image';
  import 'bootstrap/dist/css/bootstrap.min.css';

  class CityPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row justify-content-center">
                <center>
                    <h5 className="display-5">Start Browsing</h5>
                    <a className="app-link" href="#"></a>
                    <Image className="App-arrow" src={this.props.srcImg} alt="Link"  />
                    <a/>
                </center>
            </div>
        )
    }
  }

  

  
export default CityPage;