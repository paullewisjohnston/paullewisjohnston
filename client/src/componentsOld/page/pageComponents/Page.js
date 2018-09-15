import React from 'react';

const Page = (props) => {
    return(
      <div style={props.style}>
        {props.field1}<br/>
        {props.field2}<br/>
        {props.field3}<br/>
        {props.field4}<br/>
      </div>);
}
export default Page;
