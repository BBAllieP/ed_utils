import React from 'react';
import {Drawer} from '@material-ui/core';
import {connect} from 'react-redux';
import {toggleMenu} from '../../redux/actions.js'

const Menu = (props) => (
    <Drawer anchor={'left'} open={props.appState.showMenu} onClose={props.toggleMenu}>
        This is a menu
    </Drawer>
);

const mapStateToProps = (state) => {
    return {appState: {...state}}
    // ... computed data from state and optionally ownProps
  };
  const mapDispatchToProps = {
    toggleMenu
  }  

export default connect(mapStateToProps, mapDispatchToProps)(Menu);