import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

 const options = {
	 scales: {
			 yAxes: [{
					 stacked: true
			 }]
	 }

}
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
			propagate: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(100,70,192,0.4)',
      borderColor: 'rgba(100,70,192,0.4)',
			borderWidth: 1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
			cubicInterpolationMode: 'monotone',
			pointHoverRadius: 5,
			pointHoverBorderWidth: 2,
			pointRadius: 0,
			pointHitRadius: 10,
      data: [100, 10, 100, 10, 56, 55, 40, 100, 10, 100, 10, 100]
    },
		{
			label: 'My Second dataset',
      fill: true,
			propagate: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(100,70,192,0.4)',
      borderColor: 'rgba(100,70,192,0.4)',
			borderWidth: 1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
			cubicInterpolationMode: 'monotone',
			pointHoverRadius: 5,
			pointHoverBorderWidth: 2,
			pointRadius: 0,
			pointHitRadius: 10,
      data: [10, 20, 22, 19, 30, 11, 5, 10, 20, 22, 19, 30, 11, 5]
		}
  ]
};

export default class LineGraph extends Component{
	render () {
  	return (
      <div>
        <Line data={data} options={options}/>
      </div>
    )
  }
}
