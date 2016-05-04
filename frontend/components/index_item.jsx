var React = require('react');
var SongActions = require('../actions/song_client_actions.js');
var hashHistory = require('react-router').hashHistory;
var LikeActions = require('../actions/like_actions.js');
var SessionStore = require('../stores/session_store.js');
var LikeStore = require('../stores/likes_store.js');
var PlayStore = require('../stores/play_store.js');


module.exports = React.createClass({
	getInitialState: function() {
		return {userLoggedIn: SessionStore.userPresent(), songLiked: LikeStore.songLiked(this.props.song.id)}
	},

	componentDidMount: function() {
		this.userListener = SessionStore.addListener(this.userPresence);
		this.likeStoreListen = LikeStore.addListener(this.likesUpdate);
	},

	componentWillUnmount: function() {
		this.userListener.remove();
		this.likeStoreListen.remove();
	},

	userPresence: function() {
		this.setState({ userLoggedIn: SessionStore.userPresent() });
	},

	likesUpdate: function() {
		this.setState({ songLiked: LikeStore.songLiked(this.props.song.id)})
	},

	playSong: function(event) {
		event.preventDefault();
		SongActions.playSong(this.props.song.id);
		// this.setState({ songPlaying: true });
	},

	artistRoute: function(event) {
		event.preventDefault();
		// var betterRoute = this.props.song.artist.split(" ").join("%20");
		hashHistory.push("artists/"+ this.props.song.artist);
	},

	createLike: function(event) {
		event.preventDefault();
		LikeActions.createLike(this.props.song.id);
	},

	unlike: function(event) {
		event.preventDefault();
		LikeActions.unlike(this.props.song.id);
	},

	buttonToggle: function() {
		if (this.state.userLoggedIn) {
			if (this.state.songLiked) {
				return <button className="like" onClick={this.unlike}>Unlike</button>
			} else{
				return <button className="like" onClick={this.createLike}>Like</button>
			}
		} else {
			return <div id='imgSpace'/>
		}
	},

	// playButton: function() {
	// 	if (this.state.songPlaying) {
	// 		return <button className="imgPlay" onClick={this.playSong}>+</button>
	// 	} else {
	// 		return <button className="imgPlay" onClick={this.playSong}>▶</button>
	// 	}
	// },

	buttonShow: function() {
		document.getElementsByClassName('imgPlay').style.display = "block";
	},

	render: function() {
		return (
			<li className='songItem'>
				<img src={this.props.song.img_url} onHover={this.buttonShow}/>
				<button className="imgPlay" onClick={this.playSong}>▶</button>
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