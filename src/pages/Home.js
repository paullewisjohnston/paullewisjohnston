import React from 'react';
import ListContainer from '../components/ListContainer';
import dataEducation from '../assets/data/dataEducation.json';
import dataJobs from '../assets/data/dataJobs.json';

function Home(props){
  return(
    <div>
      {console.log(dataJobs[0])}
      <ListContainer data={dataEducation} theme={props.theme} background={dataEducation[0].background} color={dataEducation[0].color} title={dataEducation[0].type}/>
      <ListContainer data={dataJobs} theme={props.theme} background={dataJobs[0].background} colorTitle={dataJobs[0].colorTitle} title={dataJobs[0].type}/>
    </div>
  )
}
export default Home
