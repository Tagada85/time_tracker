import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
 
import App from '/imports/src/ui/layouts/App'
import router from '/imports/src/ui/router'
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});