import React from 'react';
import PropTypes from 'prop-types';
import Curved from './borders/curved/Curved';

const propTypes = {
  type: PropTypes.oneOf(['curved']),
};

const Border = (props) => {
  switch(props.type) {
    case 'curved':
      return <Curved {...props} />;
    default:
      return null;
    }
}

export default Border

Border.propTypes = propTypes;
