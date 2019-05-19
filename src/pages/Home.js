import React from 'react';
import SectionContainer from '../components/SectionContainer';
import data from '../assets/data/data.json';

const Home = (props) => {
  return(
    <div>
      <SectionContainer {...props} data={data} theme={props.theme}/>
    </div>
    );
  }
export default Home
