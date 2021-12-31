import React,{Component} from 'react';


import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import Signin from './SigninComponent';
import Signup from './SignupComponent';
import SimpleMap from './SimpleMapComponent';
import Home from './HomePageComponent';
class Main extends Component{
  constructor(props){
    super(props);
    //console.log(props);
    }
  render(){
      
    return (
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path='/simplemap' component={SimpleMap} ></Route>
          <Route exact path='/home' component={Home} ></Route>
          <Route exact path='/signin' component={Signin} ></Route>
          <Route exact path='/signup' component={Signup} ></Route>
          <Route path='/auth/user/emailverification'component={Signin} ></Route>
          <Route path='/'component={Home} ></Route>
          

          <Redirect to="/signin" />
          </Switch>
          
        </div>
       </BrowserRouter>
      );
    }
  }

export default Main;
