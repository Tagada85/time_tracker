import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withTracker} from 'meteor/react-meteor-data'
import {DayData} from '/imports/api/days'
import moment from 'moment'

class EntriesList extends React.Component {

	renderEntries = entries => {
		return (
			<ul>
				{entries.map(e => {
					return (
						<li key={e._id}>
							<a href={`/${e.day}`}>{moment(e.day).format('dddd Do MMMM YYYY')}</a>
						</li>
					)
				})}
			</ul>
		)
	}
	render(){
		const {isReady, entries} = this.props
		if(isReady){
			console.log(entries)
			return (
				<Grid>
					<Typography
						variant='title'>
						Last entries
					</Typography>
					<ul>
						{this.renderEntries(entries)}
					</ul>
				</Grid>
			)
		} else {
			return 'Loading...'
		}
	}
}

export default withTracker(() => {
	const handle = Meteor.subscribe('getAllEntries')

	return {
		isReady: handle.ready(),
		entries: DayData.find({}).fetch()
	}
})(EntriesList)