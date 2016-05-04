var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SongActions = require('../actions/song_client_actions.js');
var SongStore = require('../stores/song_store.js');
var SessionStore = require('../stores/session_store.js');
var LikeStore = require('../stores/likes_store.js');
var IndexItem = require('./index_item.jsx');
var LikeActions = require('../actions/like_actions.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			songs: []
		}
	},

	componentDidMount: function() {
		this.songListener = SongStore.addListener(this.songChange);
		// this.userListen = SessionStore.addListener(this.userChange);
		SongActions.fetchSongs();
		LikeActions.getLiked();
		// debugger;
	},

	componentWillUnmount: function() {
		this.songListener.remove();
		// this.userListen.remove();
	},

	songChange: function() {
		this.setState({songs: SongStore.all()});
	},

	// userChange: function() {
	// 	LikeActions.getLiked()
	// 	// this.setState({ likes: LikeActions.getLiked() });
	// },

	render: function() {
		return (
			<div className='cover-index'><br/>Click Play to Play Song or Add to Queue
					<ul>
						{
							this.state.songs.map(function(song) {
								return <IndexItem song={song} key={song.id} />
							})
						}
					</ul>
				</div>
			);
	}
})