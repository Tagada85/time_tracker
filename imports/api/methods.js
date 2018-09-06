import {DayData} from '/imports/api/days'

Meteor.methods({
	importData({data, day}){
		console.log(data)
		console.log(day)
		DayData.insert({data, day}, err => {
			if( err ){
				throw new Meteor.Error('error while saving your data')
			} else {
				return true
			}
		})
	}
})