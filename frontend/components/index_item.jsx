var React = require('react');
var SongActions = require('../actions/song_client_actions.js');

module.exports = React.createClass({
	playSong: function(event) {
		event.preventDefault();
		SongActions.playSong(this.props.song);
	},

	render: function() {
		return (
			<li className='songItem' onClick={this.playSong}>
				<img src={this.props.song.img_url} />
				<br/>
				<label className="indexText">
					{this.props.song.title}<br/>{this.props.song.artist}
				</label>
			</li>
		);
	}
})
				// <img src={this.props.song.imgUrl} onClick={this.playSong} />