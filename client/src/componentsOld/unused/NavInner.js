import React, { Component } from 'react';
import {Paper,IconButton} from 'material-ui/';
import CustomTheme from '../../../CustomTheme';
import NavButton from './NavButton'
import SvgIconFace from 'material-ui/svg-icons/action/face';
import SvgIconSearch from 'material-ui/svg-icons/action/search';
import SvgIconPublic from 'material-ui/svg-icons/social/public';
import SvgIconSettings from 'material-ui/svg-icons/action/settings';

class Nav extends Component {
  render(){
    return (
      <div style = {this.props.styles.div}>
        <Paper style={this.props.styles.container} zDepth={0}>
            <br/>
            <IconButton onClick={this.handleNavItem.bind(this,'1')}><SvgIconFace /></IconButton>
            <br/>
            <IconButton onClick={this.handleNavItem.bind(this,'2')}><SvgIconSearch /></IconButton>
            <br/>
            <IconButton onClick={this.handleNavItem.bind(this,'2')}><SvgIconSearch /></IconButton>
            <br/>
        </Paper>
      </div>
    );
  }

  handleNavItem(itemNum) {
    this.props.onNavItem(itemNum);
  }
}

export default (Nav);
