import React,{ Component } from "react";
import './main.css'
import { Row, Col, Button, FormFeedback, Input} from "reactstrap";
import logo from '../Assets/GoGreen.png';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Link } from "react-router-dom";
import { baseUrl } from '../shared/basedUrl';
import Axios from "axios";


class Signup extends Component{
    constructor(props){
      super(props);
      this.state={
        email:'',
        lastname:'',
        username:'',
        password:'',
        firstname:'',
        confirmpassword:'',
        touched:{
          firstname:false,
          lastname:false,
          email:false ,
          username:false,
          password:false,
          confirmpassword:false
        },
        signupVerify:false,
        SignupResponse:"",
      }
      this.handleLogin=this.handleLogin.bind(this);
      this.handleBlur=this.handleBlur.bind(this);
    }
      handleLogin(e){
        const{firstname,lastname,email,confirmpassword,username,password}=this.state
        if(firstname.length===0 || lastname.length===0 || email.length===0 || password.length===0 || confirmpassword.length===0)
        {
          alert("Fields cant be empty");
        }
        else{
          console.log("Signup Info:",this.state);
          // e.preventDefault();

          const userInfo = {
            firstName:firstname,
            lastName:lastname,
            username: username,
            email: email,
            password : password
        
          };
          console.log(userInfo);
          Axios.post(baseUrl+'Auth/user/signup', userInfo )
            .then(res => {
              console.log(res);
              if(res.status===200)
              {
                if(res.data.status===true)
                {
                  this.setState({
                    signupVerify:true,
                    SignupResponse:res.data.message
                  })
                }
                else{
                  this.setState({
                    signupVerify:true,
                    SignupResponse:res.data
                  })
                }
                
              }
              console.log(res.data);
            })
            .catch(error=>{
              console.log(error)
            })
        }
      }

      handleBlur=(field)=>(evt)=>{
        this.setState({
          touched:{...this.state.touched,[field]:true}
        });
      }
      validate (firstname,lastname,email,username,password,confirmpassword) {
        const errors = {
          firstname:'',
          lastname:'',
          email:'',
          username:'',
          password:'',
          confirmpassword:''
        };
      
        if (this.state.touched.firstname && firstname.length<3) {
          errors.firstname = "First Name is too Short";
        } 
        if (this.state.touched.lastname && lastname.length<3) {
          errors.lastname = "Last Name is too Short";
        } 
        if(this.state.touched.password &&  this.state.password <5)
        {
          errors.password="Password is Too Short";
        }
        if(this.state.touched.confirmpassword && this.state.password!=this.state.confirmpassword)
        {
          errors.password="Password does not match";
          errors.confirmpassword="Password does not match";
        }

        if(this.state.touched.email &&email.split('').filter(x=>x==='@').length!==1){
          errors.email = "Email Should Contain @";
        }
        else if (this.state.touched.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          errors.email = "Invalid email address";
        }
        
      
        return errors;
      }
      changeHandler=e=>{
        // console.log("Signup Info:",e);
        this.setState({[e.target.name]:e.target.value})
      }
      
    render(){
      const{firstname,lastname,email,confirmpassword,username,password}=this.state
      const errors=(this.validate(firstname,lastname,email,confirmpassword,username,password))
      console.log("LENGTHSSSS ",errors.firstname.length, errors.lastname.length, errors.email.length, errors.password.length, errors.confirmpassword.length);
      return (
        <div className='bgsignin' >
          <div className='Signupbox'>
            <img src={logo} className="" height='150px' width='150px' alt="logo" />
            <h3><p className='textshadow' style={{color:'#B9DD8B'}}>Sign Up</p></h3>
            <LocalForm onSubmit={this.handleLogin} style={{marginRight:'15px'}} className="col-12 col-md-12 col-sm-12 " >

            <Row className='form-group'>
                <Col >
                    <Input   model=".firstname" id="firstname" name="firstname" value={firstname} type='text' placeholder="First Name" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('firstname')}
                     valid={errors.firstname===""} invalid={errors.firstname !==""}  style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  

                    <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
                  
                <Col >
                    <Input  model=".lastname" id="lastname" name="lastname" value={lastname} type='text' placeholder="Last Name" className="form-control" onChange={this.changeHandler}onBlur={this.handleBlur('lastname')}
                    valid={errors.lastname===""} invalid={errors.lastname !==""}   style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                    <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </Row> 
              <Row className='form-group'>
                <Col >
                    <Input  model=".username" id="username" name="username" value={username} type='text' placeholder="Username" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('username')}
                     valid={errors.username===""} invalid={errors.username !==""}  style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                    <FormFeedback>{errors.username}</FormFeedback>
                </Col>
                <Col >
                    <Input  model=".email" id="email" name="email" value={email} type='email' placeholder="Your Email" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('email')}
                      valid={errors.email===""} invalid={errors.email !==""}  style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                    <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </Row> 
              <Row className='form-group'>
                <Col >
                  <Input  model=".password" id="password" name="password" value={password} type='password' placeholder="Password" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('password')}
                      valid={errors.password===""} invalid={errors.password !==""}  style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                  <FormFeedback>{errors.password}</FormFeedback>
                </Col>              
              </Row>
              <Row className='form-group'>
                <Col >
                    <Input  model=".confirmpassword" id="confirmpassword" name="confirmpassword" value={confirmpassword} type='password' placeholder="Confirm Password" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('confirmpassword')}
                        valid={errors.confirmpassword===""} invalid={errors.confirmpassword !==""}  style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                    <FormFeedback>{errors.confirmpassword}</FormFeedback>
                </Col>              
              </Row>
              <Row className="form-group">
                  <Col>
                    {errors.firstname.length===0 && errors.lastname.length===0 && errors.email.length===0 && errors.password.length===0 && errors.confirmpassword.length===0? (
                      <Button type="submit" style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}>
                        Sign Up
                      </Button>
                    ) : (
                      <Button type="submit" disabled style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}>
                        Sign Up
                      </Button> 
                    )}
                      
                    </Col>
      
              </Row>

            </LocalForm>
                    {this.state.signupVerify?(<h3 style={{color :'#0E130E'}}>{this.state.SignupResponse}</h3>):(<div></div>)}
          </div>        
        </div>
            
        );
      }
    }
  export default Signup;
  