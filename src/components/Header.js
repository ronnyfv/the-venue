import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

class Header extends PureComponent {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };

  render() {
    const { drawerOpen } = this.state;
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#2f2f2f',
          boxShadow: 'none',
          padding: '10px 0',
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={this.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer open={drawerOpen} onClose={this.toggleDrawer} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
