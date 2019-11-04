import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Image, Container, Row} from 'react-bootstrap';
  import Login from './Login.js';
  import CityPage from './ToCityPage';

  class Account extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <CityPage srcImg={this.props.srcImg}/>
                    </Route>
                    <Route path="/Login">
                        <Login></Login>
                    </Route>
                    <Route path="/CreateAccount">
                    
                    </Route>
                </Switch>
                <Container>
                    <center className="container">
                        <p>Want to build your own MYtinerary?</p>
                    </center>
                </Container>
                <Container>
                    <nav >
                        <div className="d-flex justify-content-around">
                                <Link to="/Login">Log in</Link>
                                <Link to="/CreateAccount">Creat account</Link>
                        </div>
                    </nav>
                </Container>
            </Router>
        )
    }
}

  class Footer extends Component{
      constructor(props){
          super(props);
      }

      render(){
          return(
            
              <div className="row justify-content-center">
                <Container>
                    <Account srcImg={this.props.srcImg2}></Account>
                </Container>
                <Container>  
                    <center>
                        <a className="App-link-home">
                        <Image className="App-home" src={this.props.srcImg} alt="Icono de Home" />
                        </a>
                    </center>
                </Container>
              </div>
          )
      }
  }
  //Teni-935

  export default Footer;