import React from 'react'
import Job from './type/Job'
import Education from './type/Education'
import Border from './Border'

const ListContainer = (props) => {
  return(
    <div>
      {
      props.data.map(item => (
        <div key={item.id} basic vertical style={{padding: '0 0'}}>
          <div basic vertical style={{padding: '4em 0em', background:props.theme[props.background] ,color:props.theme[item.color]}}>
            {(() => {
              switch(item.type) {
                case 'education':
                  return <Education item={item}/>;
                case 'jobs':
                  return <Job item={item}/>;
                default:
                  return null;
              }
            })()}
          </div>
          <Border type={item.border} scrollHeaderHeight={100} viewBoxHeight={20} background={props.theme[item.background]} fill={props.theme[item.background_next]}/>
        </div>
      ))
      }
    </div>
    );
  }
export default ListContainer
