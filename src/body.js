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
  import Login from './Login.js'


class Account extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <center>
                    <p>Want to build your own MYtinerary?</p>
                </center>
                 <nav >
                     <div className="d-flex justify-content-around">
                            <Link to="/Login">Log in</Link>
                            <Link to="/CreateAccount">Creat account</Link>
                    </div>
                </nav>
                <Switch>
                    <Route path="/Login">
                        <Login></Login>
                    </Route>
                    <Route path="/CreateAccount">

                    </Route>
                </Switch>
            </Router>
        )
    }
}

class Body extends Component{
    render(){
        return(
            <React.Fragment>
               <CityPage srcImg={this.props.srcImg}/>
               <Account />
            </React.Fragment>
        )
    }
}

export default Body;