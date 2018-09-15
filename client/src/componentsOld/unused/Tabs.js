import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import CustomTheme from '../CustomTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';
import HomeIcon from 'material-ui-icons/Home';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';

const styles = {
  div:{
    padding: '0 15%',
  }
};

class NavTabs extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    return (
      <div style={styles.div}>
      <Tabs inkBarStyle={{background: CustomTheme.palette.inkBarColor}} zDepth={1}>
        <Tab icon={<HomeIcon />} containerElement={<Link to="/"/>} />
        <Tab icon={<FavoriteIcon />} containerElement={<Link to="/About"/>} />
        <Tab icon={<PersonPinIcon />} containerElement={<Link to="/Projects"/>} />
      </Tabs>
      </div>
    );
  }
}

export default NavTabs;
