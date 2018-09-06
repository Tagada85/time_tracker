import React from 'react'
import {Pie} from 'react-chartjs-2'

export default class DayData extends React.Component {
	render(){
		return (
			<React.Fragment>
				<Pie
					data={{
						labels: [
							'One',
							'Two',
							'Three'
						],
						datasets: [{
							data: [300, 50, 100],
							backgroundColor: [
								"blue",
								"red",
								"green"
							]
						}]
					}} />
			</React.Fragment>
		)
	}
}