import React from 'react'
import {Divider, Segment} from 'semantic-ui-react'
import Job from './type/Job'
import Education from './type/Education'
import Border from './Border'

const ListContainer = (props) => {
  return(
    <div>
        <div>
        <Segment basic vertical style={{background:props.theme[props.background]}}>
          <Divider inverted horizontal style={{color:props.theme[props.colorTitle]}}>{props.title}</Divider>
        </Segment>
        {
        props.data.map(item => (
          <Segment key={item.id} basic vertical style={{padding: '0 0'}}>
            <Segment basic vertical style={{padding: '4em 0em', background:props.theme[props.background] ,color:props.theme[item.color]}}>
              {(() => {
                switch(item.type) {
                  case 'education':
                    return <Education item={item}/>;
                  case 'jobs':
                    return <Job item={item}/>;
                  // case 'projects':
                  //   return <Project item={item}/>;
                  // case 'blog':
                  //   return <Blog item={item}/>;
                  default:
                    return null;
                }
              })()}
            </Segment>
            <Border type={item.border} scrollHeaderHeight={100} viewBoxHeight={20} background={props.theme[item.background]} fill={props.theme[item.background_next]}/>
          </Segment>
        ))
      }
      </div>
    </div>
    );
  }
export default ListContainer
