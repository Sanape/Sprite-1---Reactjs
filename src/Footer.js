import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  class Footer extends Component{
      constructor(props){
          super();
      }

      render(){
          return(
              <div className="container jumbotron">
                    <center>
                        <img src="..\img\homeIcon.png" alt="Icono de Home" />
                    </center>
              </div>
          )
      }
  }

  export default Footer;