import React from 'react';
import ScrollArea from './ScrollArea'
import BezierCurve from './BezierCurve'
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired,
  viewBoxHeight: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
};


const ScrollBasedBezier = (props) => (
  <ScrollArea
    background={props.background}
    topBuffer={props.headerHeight}
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

ScrollBasedBezier.propTypes = propTypes;

export default ScrollBasedBezier
