var React = require('react');
var Login = require('./login.jsx');
var SignUp = require('./sign_up.jsx');
var ClientActions = require('../actions/client_actions.js');
var SessionStore = require('../stores/session_store.js');
var hashHistory = require('react-router').hashHistory;
var Search = require('./song_search.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			userPresent: SessionStore.userPresent(),
			currentUser: SessionStore.currentUser(),
			currentlyClicked: false
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

	linkToUser: function() {
		hashHistory.push('users/' + currentUser.id)
	},

	clickedLogin: function() {
		this.setState({currentlyClicked: true})
	},

	enableButtons: function() {
		this.setState({currentlyClicked: false})
	},

//TODO: put search bar in nav
	render: function() {
		if (this.state.userPresent) {
			return (
				<nav className="logged"> <h2 onClick={this.linkToHome}>Cloud Sound</h2>
					<img src='http://res.cloudinary.com/mr-costanzo/image/upload/v1462125883/music_app_icon_kh7smm.png' onClick={this.linkToHome}/>
					<Search />
					<button className="logOut" onClick={this.logoutUser}>Logout</button>
				</nav>
				)
		} else {
			return(
				 <nav> <h2 onClick={this.linkToHome}>Cloud Sound</h2>
				 	<img src='http://res.cloudinary.com/mr-costanzo/image/upload/v1462125883/music_app_icon_kh7smm.png' onClick={this.linkToHome} />
				 	<Search />
		  			<SignUp clickedLogin={this.clickedLogin} currentlyClicked={this.state.currentlyClicked} enableButtons={this.enableButtons} />
		   			<Login clickedLogin={this.clickedLogin} currentlyClicked={this.state.currentlyClicked} enableButtons={this.enableButtons}/>
		 		</nav>
		)
		}
	}
});