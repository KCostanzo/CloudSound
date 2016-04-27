var React = require('react');
var Login = require('./login.jsx');
var SignUp = require('./sign_up.jsx');
var SessionStore = require('../stores/session_store.js');

module.exports = React.createClass({
	getInitalState: function() {
		return({
			userPresent: SessionStore.userPresent(),
			currentUser: SessionStore.currentUser()
		});
	},

	componentDidMount: function() {
		this.SSListener = SessionStore.addListener(this.storeChange);
	},

	componentWillUnmount: function() {
		this.SSListener.remove();
	},

	storeChange: function() {
		this.setState({userPresent: SessionStore.userPresent(), currentUser: SessionStore.currentUser()});
	},

	logout: function

	render: function() {
		return(
		 <nav>
		   <SignUp/>
		   <Login/>
		 </nav>
		)
	}
});