import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'
import App from '/imports/src/ui/layouts/App'
import Home from '/imports/src/ui/Home'
import DayData from '/imports/src/ui/DayData'


FlowRouter.route('/', {
	action: function(){
		mount(App, {
			content: <Home />
		})
	}
})

FlowRouter.route('/:day', {
	action: function(){
		mount(App, {
			content: <DayData />
		})
	}
})