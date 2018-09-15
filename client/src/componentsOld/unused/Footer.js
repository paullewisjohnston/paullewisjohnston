import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  footer:{
    height:500
  },
  appBar:{
    alignContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  title:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    fontSize:'3em',
  }
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Footer = () => (
  <AppBar
    title={<span>Paul Lewis Johnston</span>}
    style={styles.appBar}
    titleStyle={styles.title}
    onTitleTouchTap={handleTouchTap}
    showMenuIconButton={false}
    zDepth={0}
  />
);

export default Footer;
