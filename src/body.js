import React, {Component} from 'react';
import CityPage from './ToCityPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <center>
                    <p>Want to build your own MYtinerary?</p>
                </center>
                <div className="container" id="login">
                    <a href="">Log in</a>
                    <a href="">Create account</a>
                </div>
            </React.Fragment>
        )
    }
}

class Body extends Component{
    render(){
        return(
            <body>
               <CityPage srcImg={this.props.srcImg}/>
               <Login />
            </body>
        )
    }
}

export default Body;