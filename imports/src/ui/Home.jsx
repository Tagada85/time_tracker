import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import EntriesList from './EntriesList'
import DayData from './DayData'

export default class Home extends React.Component {
	changeFile = e => {
		const fileReader = new FileReader()
		let file = e.target.files[0]
		console.log(file)
		let results = []
		fileReader.onload = e => {
			let parsed = csv.parse(fileReader.result, ',')
			parsed.map((row, i) => {
				let newRow = []
				if(i !== 0){
					row.map((r, i) => {
						if( i == 1 || i == 4 || i ==5 || i == 7){
							newRow.push(row[i])
						}
					})
					results.push(newRow)
				}
			})
			let day = this.getDay(file.name)
			console.log(results)
			Meteor.call('importData', {day, data: results})
		}
		fileReader.readAsText(file)
	}

	getDay = name => {
		return name.split('_')[5].split('.')[0]
	}
	render(){
		return (
			<Grid 
				direction='column' 
				container 
				alignItems='center'>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
				<Typography
					variant='title'>
					Time Tracker
				</Typography>
				<Button
					variant="contained"
					color='primary'>
					<label htmlFor='files'>Import</label>
					<input 
						type='file'
						id='files'
						accept=".csv"
						style={{display: 'none'}}
						onChange={this.changeFile} />
				</Button>
				<EntriesList />
				<DayData />
			</Grid>
    )
	}
} 