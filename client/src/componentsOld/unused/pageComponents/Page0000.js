import React, { Component } from 'react';
import {Paper,TextField} from 'material-ui/';
import CustomTheme from '../../../CustomTheme';

const styles = {
  div: {
    textAlign: 'center',
    padding: 0,
  },
  container: {
    height:'100vh',
    width:600,
    background: CustomTheme.palette.primary2Color,
  },
  title: {
    fontSize:40,
    height:'40%',
    background: CustomTheme.palette.primary2Color,
    color: CustomTheme.palette.alternateTextColor,
  },
  description: {
    height:'60%',
    background: CustomTheme.palette.primary2Color,
    color: CustomTheme.palette.primary2Color,
  }
};

class Page extends Component {
  constructor(props){
    super(props);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.removePage = this.removePage.bind(this);
  }
  render(){
    return (
      <div style = {styles.div}>
        <Paper style={styles.container} zDepth={0}>
          <div style={styles.title}>
            {this.props.name}!
            <br/>
            {this.props.released}
            <br/>
            <TextField id="text-field-controlled" value={this.props.textName} onChange={this.handleTitleTextChange}/>
            <br/>
            <button onClick={this.handleUpdate}>Update</button>
            <br/>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
          <div style={styles.description}>
            <button  onClick={this.frenchify}>Frenchify!</button>
            <br/>
            <button onClick={this.removePage}>Remove Me!</button>
          </div>
        </Paper>
      </div>
    );
  }

  handleTitleTextChange(event){
    this.props.onTitleTextChange(event.target.value);
  }

  handleUpdate(){
    this.props.updatePage(this.props.name, this.state.value)
}

  handleDelete(){
    this.props.deletePage(this.props.self, this.props.name)
}

  removePage(){
    this.props.removePage(this.props.name)
  }

}

export default Page;
