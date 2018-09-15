import React from 'react';

const PageJob = (props) =>{
    return (
      <div>
        {props.company}<br/>
        {props.role}<br/>
        {props.date}<br/>
        {props.description}<br/>
      </div>
    );
}
export default PageJob;
