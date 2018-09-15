import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from 'material-ui/';
import { withRouter } from 'react-router-dom';

const NavButton = (props) => (
  <IconButton iconStyle={{color:props.style.color}} onClick={() => props.history.push(props.to)}>
    {props.children}<props.style.icon/>
  </IconButton>
);

NavButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  to: PropTypes.string.isRequired
};

export default withRouter(NavButton);
