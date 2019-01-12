import React from 'react';

const BezierCurve = (props) => {
  return (
    <svg style={{display: 'block'}} viewBox={`0 0 ${props.viewBoxWidth} ${props.viewBoxHeight}`}>
      <path
        d={`
          M ${props.startPoint}
          C ${props.firstControlPoint}
            ${props.secondControlPoint}
            ${props.endPoint}
          L ${props.viewBoxWidth},${props.viewBoxHeight}
          L 0,${props.viewBoxHeight}
        `}
        fill={props.fill}
      />
    </svg>
  );
}

export default BezierCurve
