import React from 'react';
import {Divider, Segment} from 'semantic-ui-react'
import Job from './type/Job';
import Education from './type/Education';
import Border from './Border';

const SectionContainer = (props) => {
  return(
    <div>
      <Segment basic vertical style={{background:'#2E2E2E'}}>
        <Divider inverted horizontal >Education</Divider>
      </Segment>
      {props.education.map(item => ([
        <Segment basic vertical style={{padding: '0 0'}}>
          <Segment basic vertical style={{background:'#2E2E2E', padding: '4em 0em', color:'#ffffff'}}>
            <Education item={item}/>
          </Segment>
          <Border type='curved' scrollHeaderHeight={100} viewBoxHeight={20} background='#2E2E2E' fill='white'/>
        </Segment>
        ]))}
      <Segment basic vertical style={{background:'white', padding: '0 0'}}>
        <Divider horizontal>Work Experience</Divider>
      </Segment>
      {props.jobs.map(item => ([
        <Segment padded basic vertical style={{background:'white', padding: '4em 0em'}}>
          <Job item={item}/>
        </Segment>
        ]))}
      <Border type='curved' scrollHeaderHeight={550} viewBoxHeight={20} background='white' fill='#fbfbfb'/>
    </div>
    );
  }
export default SectionContainer
