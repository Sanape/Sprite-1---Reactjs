import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Image, Container, Row} from 'react-bootstrap';

  class Footer extends Component{
      constructor(props){
          super(props);
      }

      render(){
          return(
            
              <div className="row justify-content-center">
                    <center>
                        <a className="App-link-home">
                        <Image className="App-home" src={this.props.srcImg} alt="Icono de Home" />
                        </a>
                    </center>
              </div>
          )
      }
  }
  //Teni-935

  export default Footer;