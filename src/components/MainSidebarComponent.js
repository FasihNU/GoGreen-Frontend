import React,{ useState } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Card, CardBody,Collapse } from 'reactstrap';
// import { useState } from 'react'

function MainSidebar() {
    const [todayCollapse, setTodayCollapse] = useState(false);
    const [overAllCollapse, setOverAllCollapse] = useState(false);
    const [thisWeekCollapse, setThisWeekCollapse] = useState(false);
    const [thisMonthCollapse, setThisMonthCollapse] = useState(false);
    // const [status, setStatus] = useState('Closed');
  
    // const onEntering = () => setStatus('Opening...');
  
    // const onEntered = () => setStatus('Opened');
  
    // const onExiting = () => setStatus('Closing...');
  
    // const onExited = () => setStatus('Closed');
  
    const overAllToggle = () => setOverAllCollapse(!overAllCollapse);
    const todayToggle = () => setTodayCollapse(!todayCollapse);
    const thisWeekToggle = () => setThisWeekCollapse(!thisWeekCollapse);
    const thisMonthToggle = () => setThisMonthCollapse(!thisMonthCollapse);
    
  return (
    <List  dense>
        <ListItem style={{background:"#143306", color:" #caa472"}}>
            <ListItemIcon><i className="fa fa-users" style={{ color:" #caa472"}}></i></ListItemIcon>
            <ListItemText>User Actions</ListItemText>
        </ListItem>
        <Link to='/signin'>
          <ListItem style={{background:"#caa472", color:" #143306"}} button>  
              <ListItemText style={{background:"#caa472", color:" #143306"}} >Login</ListItemText>
          </ListItem>
        </Link>
        <Link to='/signup'>
            <ListItem style={{background:"#caa472", color:" #143306"}} button>
                <ListItemText style={{background:"#caa472", color:" #143306"}} >Signup</ListItemText>
            </ListItem>
        </Link>
        <ListItem style={{background:"#143306", color:" #caa472"}}>
            <ListItemIcon><i className="fa fa-list-alt" style={{ color:" #caa472"}}></i></ListItemIcon>
            <ListItemText>Tree  Count</ListItemText>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}} onClick={overAllToggle}  button>
            <ListItemText>OverAll</ListItemText>        
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}}>
          <Collapse isOpen={overAllCollapse}>
            <Card>
              <CardBody>
                OVERALL TOTAL TREES PLANTED:
              </CardBody>
            </Card>
          </Collapse>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}}  onClick={todayToggle}  button>
            <ListItemText>Today</ListItemText>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}}>
          <Collapse isOpen={todayCollapse}>
            <Card>
              <CardBody>
                TOTAL TREES PLANTED TODAY :
              </CardBody>
            </Card>
          </Collapse>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}}  onClick={thisWeekToggle}  button>
            <ListItemText>This week </ListItemText>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}}>
            <Collapse isOpen={thisWeekCollapse}>
              <Card>
                <CardBody>
                TOTAL TREES PLANTED THIS WEEK:
                </CardBody>
              </Card>
            </Collapse>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}} onClick={thisMonthToggle}  button>
            <ListItemText>This month</ListItemText>
        </ListItem>
        <ListItem style={{background:"#caa472", color:" #143306"}}>
          <Collapse isOpen={thisMonthCollapse}>
            <Card>
              <CardBody>
                TOTAL TREES PLANTED THIS MONTH:
              </CardBody>
            </Card>
          </Collapse>
        </ListItem>
  </List>
  )
}

export default MainSidebar