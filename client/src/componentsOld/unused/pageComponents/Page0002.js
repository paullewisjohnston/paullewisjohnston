import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CustomTheme from '../../../CustomTheme';

const styles = {
  div: {
    textAlign: 'center',
    padding: 0,
  },
  container: {
    height:'100vh',
    width:600,
    background: CustomTheme.palette.primary1Color,
  },
  title: {
    fontSize:40,
    height:'40%',
    color: CustomTheme.palette.alternateTextColor,
    background: CustomTheme.palette.primary1Color,
  },
  description: {
    height:'60%',
    background: CustomTheme.palette.primary1Color,
    color: CustomTheme.palette.primary1Color,
  }
};

class Page2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Goodbye',
      dutch: false,
    };
    this.dutchify = this.dutchify.bind(this);
    this.removePage = this.removePage.bind(this);
  }
  render(){
    return (
      <div style = {styles.div}>
        <Paper style={styles.container} zDepth={0}>
          <div style={styles.title}>
            {this.state.page} {this.props.name}!
            <br/>
            {this.props.tagline}
            <br/>
            {this.props.released}
          </div>
          <div style={styles.description}>
            <button  onClick={this.dutchify}>Dutchify!</button>
            <br/>
            <button onClick={this.removePage}>Remove Me!</button>
          </div>
        </Paper>
      </div>
    );
  }
  dutchify(){
    if (this.state.dutch === false)
    {
      this.setState({dutch:true})
      this.setState({page:'Doei'})
    }
    else
    {
      this.setState({dutch:false})
      this.setState({page:'Goodbye'})
    }
  }
  removePage(){
    this.props.removePage(this.props.name)
  }

}

export default Page2;
