import React from 'react';
import {Divider, Segment} from 'semantic-ui-react';
import SectionContainer from '../components/SectionContainer';
import data from '../assets/data/data.json';

const Home = (props) => {
  return(
    <div>
      <SectionContainer {...props} data={data}/>
    </div>
    );
  }
export default Home
