import React from 'react';
import ScrollArea from './curved/ScrollArea'
import BezierCurve from './curved/BezierCurve'
import PropTypes from 'prop-types';

const propTypes = {
  height: PropTypes.number.isRequired,
  scrollHeaderHeight: PropTypes.number.isRequired,
  viewBoxHeight: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
};

const Curved = (props) => (
  <ScrollArea
    background={props.background}
    topBuffer={props.scrollHeaderHeight}
    areaHeight={
      window.innerHeight * 0.5
    }
  >
    {({ scrollRatio }) => {
      const viewBoxHeight = props.viewBoxHeight;

      const startPointY = getInterpolatedValue(
        props.viewBoxHeight/2,
        0,
        scrollRatio
      );

      const firstControlPointY = getInterpolatedValue(
        props.viewBoxHeight*1.5,
        0,
        scrollRatio
      );

      const secondControlPointY = getInterpolatedValue(
        -props.viewBoxHeight/2,
        0,
        scrollRatio
      );

      const endPointY = getInterpolatedValue(
        props.viewBoxHeight/2,
        0,
        scrollRatio
      );

      return (
        <BezierCurve
          viewBoxWidth={300}
          viewBoxHeight={viewBoxHeight}
          startPoint={[0, startPointY]}
          firstControlPoint={[100, firstControlPointY]}
          secondControlPoint={[200, secondControlPointY]}
          endPoint={[300, endPointY]}
          fill={props.fill}
        />
      );
    }}
  </ScrollArea>

);


const getInterpolatedValue = (y1, y2, x) => {
  const a = y2 - y1;
  return a * x + y1;
}

Curved.propTypes = propTypes;

export default Curved
