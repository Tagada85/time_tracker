import {DayData} from '/imports/api/days'
import { Meteor } from 'meteor/meteor'

Meteor.publish('getAllEntries', () => {
	return DayData.find({}, {fields:{
		data: 0
	}})
})