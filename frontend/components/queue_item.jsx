var React = require('react');
var SongActions = require('../actions/song_client_actions.js');

module.exports = React.createClass({
	removeSongFromQueue: function(event) {
		event.preventDefault();
		SongActions.removeFromQueue(this.props.idx);
	},

	render: function() {
		return (
			<li className='queueItem'>
				{this.props.song.title}, {this.props.song.artist}
				<button className='queueSongRemove' onClick={this.removeSongFromQueue}>X</button>
				<br/>
			</li>
		);
	}
})
		