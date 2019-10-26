import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  //import 'bootstrap/dist/css/bootstrap.min.css'; 

  class Footer extends Component{
      constructor(props){
          super(props);
      }

      render(){
          return(

              <div className="container jumbotron">
                    <center>
                        <img src={this.props.srcImg} alt="Icono de Home" />
                    </center>
              </div>
          )
      }
  }

  export default Footer;