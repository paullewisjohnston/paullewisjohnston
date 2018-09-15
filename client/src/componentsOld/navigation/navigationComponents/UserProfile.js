import React, { Component } from 'react';
import {Paper,Avatar} from 'material-ui/';

class UserProfile extends Component {
  render(){
    return (
      <div style = {this.props.styles.div}>
        <Paper style={this.props.styles.container} zDepth={0}>
            {this.props.name}
            <br/>
            <br/>
            <Avatar
              src={this.props.profilePic}
              size={200}
            />
            <br/>
        </Paper>
      </div>
    );
  }
}
export default UserProfile;
