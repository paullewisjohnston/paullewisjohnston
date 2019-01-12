import React from 'react';
import PropTypes from 'prop-types';
import Line from './charts/Line';
import Pie from './charts/Pie';

const propTypes = {
  type: PropTypes.oneOf(['line','pie']),
};

const Chart = (props) => {
  switch(props.type) {
    case 'line':
      return <Line {...props} />;
    case 'pie':
      return <Pie {...props} />;
    default:
      return null;
    }
}

export default Chart

Chart.propTypes = propTypes;
