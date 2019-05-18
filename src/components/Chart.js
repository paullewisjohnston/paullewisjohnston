import React from 'react';
import PropTypes from 'prop-types';
import StackedArea from './charts/StackedArea';

const propTypes = {
  type: PropTypes.oneOf(['stacked-area']),
};

const Chart = (props) => {
  switch(props.type) {
    case 'stacked-area':
      return <StackedArea {...props} />;
    default:
      return null;
    }
}

export default Chart

Chart.propTypes = propTypes;
