var React = require('react');
var SongActions = require('../actions/song_client_actions.js');
var SongStore = require('../stores/song_store.js');
var IndexItem = require('./index_item.jsx');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
	getInitialState: function() {
		return {
			songs: []
		}
	},

	componentDidMount: function() {
		this.songListener = SongStore.addListener(this.songChange);
		SongActions.fetchArtistSongs(this.props.params.artist);
	},

	componentWillUnmount: function() {
		this.songListener.remove();
	},

	songChange: function() {
		this.setState({songs: SongStore.all()});
	},

	linkToHome: function() {
		hashHistory.push('/');
	},

	render: function() {
		return (
			<div className='artist-index'>
					<ul>
						{
							this.state.songs.map(function(song) {
								return <IndexItem song={song} key={song.id} />
							})
						}
					</ul>
					<p className="linkArtistHome" onClick={this.linkToHome}>Back to Home</p>
				</div>
			);
	}
})