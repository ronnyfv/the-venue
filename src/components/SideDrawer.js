import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({ open, closed, clicked }) => (
  <Drawer anchor="right" open={open} onClose={closed}>
    <List component="nav">
      <ListItem button onClick={clicked}>
        Event starts in
      </ListItem>
      <ListItem button onClick={clicked}>
        Venue NFO
      </ListItem>
      <ListItem button onClick={clicked}>
        Highlights
      </ListItem>
      <ListItem button onClick={clicked}>
        Pricing
      </ListItem>
      <ListItem button onClick={clicked}>
        Location
      </ListItem>
    </List>
  </Drawer>
);

export default SideDrawer;
