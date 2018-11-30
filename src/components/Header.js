import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { scroller } from 'react-scroll';

import SideDrawer from './SideDrawer';

class Header extends PureComponent {
  state = {
    drawerOpen: false,
    headerShow: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hangleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hangleScroll);
  }

  hangleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };

  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -130,
    });
    this.toggleDrawer();
  };

  render() {
    const { drawerOpen, headerShow } = this.state;

    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
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

          <SideDrawer
            open={drawerOpen}
            closed={this.toggleDrawer}
            clicked={this.scrollToElement}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
