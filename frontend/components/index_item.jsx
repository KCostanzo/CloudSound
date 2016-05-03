var React = require('react');
var SongActions = require('../actions/song_client_actions.js');
var hashHistory = require('react-router').hashHistory;
var LikeActions = require('../actions/like_actions.js');
var SessionStore = require('../stores/session_store.js');


module.exports = React.createClass({
	getInitialState: function() {
		return {userLoggedIn: SessionStore.userPresent()}
	},

	componentDidMount: function() {
		this.userListener = SessionStore.addListener(this.userPresence);
	},

	componentWillUnmount: function() {
		this.userListener.remove();
	},

	userPresence: function() {
		this.setState({ userLoggedIn: SessionStore.userPresent() });
	},

	playSong: function(event) {
		event.preventDefault();
		SongActions.playSong(this.props.song.id);
	},

	artistRoute: function(event) {
		event.preventDefault();
		// var betterRoute = this.props.song.artist.split(" ").join("%20");
		hashHistory.push("artists/"+ this.props.song.artist);
	},

	createLike: function(event) {
		event.preventDefault();
		LikeActions.createLike(this.props.song.id)
	},

	buttonToggle: function() {
		if (this.state.userLoggedIn) {
			return <button className="like" onClick={this.createLike}>Like</button>
		} else {
			return <div/>
		}
	},

	render: function() {
		return (
			<li className='songItem'>
				<img src={this.props.song.img_url} onClick={this.playSong}/>
				{this.buttonToggle()}
				<br/>
				<label className="indexTitle">
					{this.props.song.title}
				</label><br/>
				<label className="artistLink" onClick={this.artistRoute} artist={this.props.song.artist}>{this.props.song.artist}</label>
			</li>
		);
	}
})
				// <img src={this.props.song.imgUrl} onClick={this.playSong} />