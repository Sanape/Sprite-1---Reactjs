import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  class CityPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="display-1">Start Browsing</h1>
                <img src={this.props.srcImg}/>
            </React.Fragment>
        )
    }
  }

  
export default CityPage;