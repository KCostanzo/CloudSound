var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SongActions = require('../actions/song_client_actions.js');
var LikeActions = require('../actions/like_actions.js');
var SongStore = require('../stores/song_store.js');
var LikeStore = require('../stores/likes_store.js');
var IndexItem = require('./index_item.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			songIds: [], songs: []
		}
	},

	componentDidMount: function() {
		// this.songListen = SongStore.addListener(this.songChange);
		// SongActions.fetchSongs();
		this.likeListen = LikeStore.addListener(this.likeChange);
		LikeActions.getLiked();
	},

	componentWillUnmount: function() {
		this.likeListen.remove();
		// this.songListen.remove();
	},

	likeChange: function() {
		this.setState({songs: LikeStore.all()});
		// this.setSongs(this.state.songIds);
	},

	linkToHome: function() {
		hashHistory.push('/');
	},

	// songChange: function() {
	// 	this.setState({songs: SongStore.likedSongs(this.state.songIds)});
	// },

	// setSongs: function() {
	// 	this.setState({songs: SongStore.likedSongs(this.state.songIds)});
	// },

	render: function() {
		return (
			<div className='user-index'>
					<ul>
						{
							this.state.songs.map(function(song) {
								return <IndexItem song={song} key={song.id + 1000} />
							})
						}
					</ul>
					<p className="linkArtistHome" onClick={this.linkToHome}>Back to Home</p>
					<p className="alertUserLikes">(Liked Songs go Here)</p>
				</div>
			);
	}
})