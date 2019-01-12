import React from 'react';
import Section from './dashboards/Section'

const Dashboard = (props) => {
  return(
    <div>
      <Section columns={2} color="#fbfbfb" colorNext="white"/>
      <Section columns={2} color="white" colorNext="#fbfbfb"/>
      <Section columns={2} color="#fbfbfb" colorNext="#fbfbfb"/>
    </div>
    );
  }
export default Dashboard
