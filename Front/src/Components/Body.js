import React, {Component} from 'react';
import CityPage from './ToCityPage';

  import 'bootstrap/dist/css/bootstrap.min.css';



class Body extends Component{
    render(){
        return(
            <React.Fragment>
               <CityPage srcImg={this.props.srcImg}/>
            </React.Fragment>
        )
    }
}

export default Body;