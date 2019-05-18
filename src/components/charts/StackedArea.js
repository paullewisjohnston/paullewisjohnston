import React,{Component} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400, ac: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210, ac: 2400},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290, ac: 2400},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000, ac: 2400},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181, ac: 2400},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500, ac: 2400},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100, ac: 2400},
];

export default class StackedArea extends Component{
	render () {
  	return (
    	<AreaChart width={600} height={400} data={data}
            margin={{top: 30, right: 40, left: 0, bottom: 20}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stackId="1" stroke='#00efc5' fill='#00efc5' />
        <Area type='monotone' dataKey='pv' stackId="1" stroke='#137ec0' fill='#137ec0' />
        <Area type='monotone' dataKey='amt' stackId="1" stroke='#ff0000' fill='#ff0000' />
        <Area type='monotone' dataKey='ac' stackId="1" stroke='#60ff00' fill='#60ff00' />
      </AreaChart>
    )
  }
}
