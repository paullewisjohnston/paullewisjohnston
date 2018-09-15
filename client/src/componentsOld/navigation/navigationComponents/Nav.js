import React, { Component } from 'react';
import {Paper,IconButton} from 'material-ui/';
import NavButton from './NavButton'
import SvgIconFace from 'material-ui/svg-icons/action/face';
import SvgIconSearch from 'material-ui/svg-icons/action/search';

class Nav extends Component {
  render(){
    return (
      <div style = {this.props.styles.div}>
        <Paper style={this.props.styles.container} zDepth={0}>
            <br/>
            <IconButton iconStyle={{color:this.props.styles.navIcons.menu1.color}} onClick={this.handleMenuItem.bind(this,'1')}><SvgIconFace /></IconButton>
            <br/>
            <IconButton iconStyle={{color:this.props.styles.navIcons.menu2.color}} onClick={this.handleMenuItem.bind(this,'2')}><SvgIconSearch /></IconButton>
            <br/>
            <NavButton to="/test" style={this.props.styles.navIcons.nav1}/>
            <br/>
        </Paper>
      </div>
    );
  }
  handleMenuItem(itemNum) {
    this.props.onMenuItem(itemNum);
  }
}
export default (Nav);
