import React from 'react';
import ListContainer from '../components/ListContainer';
import dataEducation from '../assets/data/dataEducation.json';

function Home(props){
  return(
    <div style={{background:props.theme['color1']}}>
      <ListContainer data={dataEducation} theme={props.theme} background={dataEducation[0].background} color={dataEducation[0].color} title={dataEducation[0].type}/>
    </div>
  )
}
export default Home
