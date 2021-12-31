import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  ModalFooter, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import logo from '../Assets/GoGreen.png';
import Signin from './SigninComponent';
import Signup from './SignupComponent';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const MainNavbar = (props) => {
  const history = useHistory();
  const firstname = localStorage.getItem('firstName');
  const lastname = localStorage.getItem('lastName');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink >
                <UncontrolledDropdown nav inNavbar >
                  <DropdownToggle nav caret style={{ background: "#143306", color: " #caa472" }}>
                    {firstname}{' '}{lastname}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      {firstname}{' '}{lastname}
                    </DropdownItem>
                    <DropdownItem>
                      EMAIL
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => {
                      localStorage.removeItem('firstName')
                      localStorage.removeItem('lastName')
                      history.push('/');

                    }}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavLink>
            </NavItem>
          </Nav>

          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;