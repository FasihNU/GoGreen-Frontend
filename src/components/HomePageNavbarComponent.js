import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,Card, CardBody
} from 'reactstrap';
import logo from '../Assets/GoGreen.png';
import Signin from './SigninComponent';
import Signup from './SignupComponent';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const HomeNavbar = (props) => {
  
  const {
    buttonLabel,
    className
  } = props;
  console.log("PROPSSS = ",props);

  
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [overAllCollapse, setOverAllCollapse] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const overAllToggle = () => setOverAllCollapse(!overAllCollapse);
  const signinAndSignupToggle = () => setModal(!modal);

  const toggleSignin = () => {
    setSigninModal(!signinModal);
    setCloseAll(false);
  }

  const toggleSignup = () => {
    setSignupModal(!signupModal);
    setCloseAll(false);
  }


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} className="logo" height='60px' width='60px' alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >OverAll</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Today</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >This Week</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >This Month</NavLink>
            </NavItem>
          </Nav>
          <Nav>
          <NavItem>
          <NavLink ><Button style={{background:"#143306", color:" #caa472"}} onClick={signinAndSignupToggle}> Register/Sign in </Button></NavLink>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
              toggle={signinAndSignupToggle} className={className}>
              <ModalHeader toggle={signinAndSignupToggle}>Register/Sign in</ModalHeader>

              <ModalBody>
                <Button  onClick={toggleSignin} style={{background:"#caa472", color:" #143306"}} size="lg" block> Signin</Button>
                <Modal isOpen={signinModal} toggle={toggleSignin} onClosed={closeAll ? toggle : undefined}>
                  <ModalHeader>Register/Signin</ModalHeader>
                  <ModalBody>
                    <Signin></Signin>
                  </ModalBody>
                  <ModalFooter>
                    <Button  style={{background:"#143306", color:" #caa472"}} onClick={toggleSignin}>cancel</Button>
                  </ModalFooter>
                </Modal>
              </ModalBody>
              <ModalBody>
              <Button onClick={toggleSignup}  style={{background:"#caa472", color:" #143306"}} size="lg" block> Signup</Button>
                <Modal isOpen={signupModal} toggle={toggleSignup} onClosed={closeAll ? toggle : undefined}>
                  <ModalHeader>Sign Up</ModalHeader>
                  <ModalBody>
                    <Signup></Signup>
                  </ModalBody>
                  <ModalFooter>
                    <Button  style={{background:"#143306", color:" #caa472"}} onClick={toggleSignup}>close</Button>
                  </ModalFooter>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <Button style={{background:"#143306", color:" #caa472"}} onClick={signinAndSignupToggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </NavItem>
          </Nav>
          
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;