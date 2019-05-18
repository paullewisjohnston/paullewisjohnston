import React from 'react';
import Section from './dashboards/Section'
import Border from './Border'

const color1 = "#fbfbfb";
const color2 = "white";
const color3 = "#2E2E2E";

const Dashboard = (props) => {
  return(
    <div>
      <Section columns={2} color={color3}/>
      <Border type='curved' scrollHeaderHeight={100} viewBoxHeight={20} background={color3} fill={color2} />
      <Section columns={2} color="white" colorNext="#fbfbfb"/>
      <Border type='curved' scrollHeaderHeight={100} viewBoxHeight={20} background={color2} fill={color1} />
      <Section columns={2} color="#fbfbfb" colorNext="white"/>
      <Border type='curved' scrollHeaderHeight={100} viewBoxHeight={20} background={color1} fill={color2} />
      <Section columns={2} color="white" colorNext="#fbfbfb"/>
      <Border type='curved' scrollHeaderHeight={550} viewBoxHeight={20} background={color2} fill={color1} />
    </div>
    );
  }
export default Dashboard
