import React from 'react';
import {Divider, Segment} from 'semantic-ui-react'
import Job from './type/Job';
import Education from './type/Education';
import Border from './Border';

const SectionContainer = (props) => {
  return(
    <div>
      {props.data.map(items => (
        <div>
        <Segment basic vertical style={{background:items.background}}>
          <Divider inverted horizontal style={{color:items.color}}>{items.title}</Divider>
        </Segment>
        {items.data.map(item => (
          <Segment basic vertical style={{padding: '0 0'}}>
            <Segment basic vertical style={{background:item.background, padding: '4em 0em', color:item.color}}>
              {(() => {
                switch(item.type) {
                  case 'education':
                    return <Education item={item}/>;
                  case 'job':
                    return <Job item={item}/>;
                  default:
                    return null;
                }
              })()}
            </Segment>
            <Border type={item.border} scrollHeaderHeight={100} viewBoxHeight={20} background={item.background} fill={item.backgroundNext}/>
          </Segment>
        ))}
      </div>
      ))}
    </div>
    );
  }
export default SectionContainer
