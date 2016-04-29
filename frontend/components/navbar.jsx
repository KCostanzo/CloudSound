var React = require('react');
var Login = require('./login.jsx');
var SignUp = require('./sign_up.jsx');
var ClientActions = require('../actions/client_actions.js');
var SessionStore = require('../stores/session_store.js');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
	getInitialState: function() {
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

	logoutUser: function(event) {
		event.preventDefault();
		ClientActions.logoutUser(this.state.currentUser);
		console.log('logged out');
	},

	linkToHome: function() {
		hashHistory.push('/');
	},


//TODO: put search bar in nav
	render: function() {
		if (this.state.userPresent) {
			return (
				<nav>
					<img src='http://res.cloudinary.com/mr-costanzo/image/upload/v1461896329/CSlogo_git2j6.jpg' onClick={this.linkToHome}/>
					<button onClick={this.logoutUser}>Logout</button>
				</nav>
				)
		} else {
			return(
				 <nav>
				 	<img src='http://res.cloudinary.com/mr-costanzo/image/upload/v1461896329/CSlogo_git2j6.jpg' onClick={this.linkToHome} />
		  			<SignUp/>
		   			<Login/>
		 		</nav>
		)
		}
	}
});