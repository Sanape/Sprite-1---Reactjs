import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cities from './Cities';

  class CityPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row justify-content-center">
                <Router>
                    <center>
                        <h5 className="display-5">Start Browsing</h5>
                        <Link to="/Cities">
                            <Image className="App-arrow" src={this.props.srcImg} alt="Link"  />
                        </Link>
                    </center>
                    <Switch>
                        <Route path="/Cities">
                            <Cities></Cities>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
  }

  

  
export default CityPage;