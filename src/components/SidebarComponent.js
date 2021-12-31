import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemIcon } from '@material-ui/core';
import { Container } from 'reactstrap';

function handleLogout(){
  console.log("LOGOUT");
}
function Sidebar(LOG) {
  console.log("LOG",LOG);

    const firstname=localStorage.getItem('firstName');
    const lastname=localStorage.getItem('lastName');
  return (
    
      <List disablePadding dense>
          
      <ListItem style={{background:"#143306", color:" #caa472"}}>
          <ListItemIcon><i className="fa fa-user"></i></ListItemIcon>          
          <ListItemText>Your Information</ListItemText>
      </ListItem>
      <ListItem style={{background:"#caa472", color:" #143306"}}>
          <ListItemText>{firstname}{' '}{lastname}</ListItemText>
      </ListItem>
      <ListItem style={{background:"#143306", color:" #caa472"}}>
          <ListItemIcon><i className="fa fa-users"></i></ListItemIcon>
          <ListItemText>User Actions</ListItemText>
      </ListItem>
      <ListItem style={{background:"#caa472", color:" #143306"}} onClick={handleLogout} button>
        <ListItemText>Logout</ListItemText>
      </ListItem>   
    </List>

  )
}
export default Sidebar