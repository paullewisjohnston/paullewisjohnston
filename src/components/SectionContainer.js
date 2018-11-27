import React from 'react';
import {Divider, Segment} from 'semantic-ui-react'
import Job from './type/Job';
import Education from './type/Education';

const SectionContainer = (props) => {
  return(
    <div style={{background:'#f7f7f7'}}>
      <Segment basic vertical>
        <Divider horizontal>Education</Divider>
      </Segment>
      {props.education.map(item => ([
        <Segment padded basic vertical style={{background:'white', padding: '4em 0em'}}>
          <Education item={item}/>
        </Segment>
        ]))}
      <Segment basic vertical>
        <Divider horizontal>Work Experience</Divider>
      </Segment>
      {props.jobs.map(item => ([
        <Segment padded basic vertical style={{background:'white', padding: '4em 0em'}}>
          <Job item={item}/>
        </Segment>
        ]))}
    </div>
    );
  }
export default SectionContainer
