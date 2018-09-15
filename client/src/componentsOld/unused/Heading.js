import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CustomTheme from '../../CustomTheme';

const styles = {
  title: {
    textAlign: 'left',
    padding: '0 15%',
    background: CustomTheme.palette.canvasColor,
    color: CustomTheme.palette.primary1Color,
    fontSize:42,
  },
  desc: {
    fontFamily: 'Open Sans sans-serif',
    textAlign: 'left',
    padding: '0 15%',
    background: CustomTheme.palette.canvasColor,
    color: CustomTheme.palette.primary1Color,
  }
};

export default class Heading extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style = {styles.div}>
        <Paper style={styles.title} zDepth={0}>
          {this.props.title}
        </Paper>
        <Paper style={styles.desc} zDepth={0}>
          {this.props.description}
        </Paper>
      </div>
    );
  }
}
