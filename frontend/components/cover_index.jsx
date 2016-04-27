var React = require('react');
var ClientActions = require('../actions/client_actions.js');
// var SongStore = require('../stores/song_store.js');
var IndexItem = require('./index_item.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			songs: [{id: 1, title: 'mysong', artist: 'stanzo'},{id: 2, title: 'song2', artist: 'blur'}]
		}
	},

	// initialstate songs: []
	// componentDidMount: function() {
	// 	this.songListener = SongStore.addListener(this.songChange);
	// },

	// componentWillUnmount: function() {
	// 	this.songListener.remove();
	// },

	// songChange: function() {
	// 	this.setState({songs: SongStore.fetchSongs()});
	// },

	render: function() {
		return (
			<div className='cover-index'>
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