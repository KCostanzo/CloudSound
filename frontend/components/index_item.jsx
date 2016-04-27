var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
	playSong: function(event) {
		event.preventDefault();
		ClientActions.playSong(this.props.song);
	},

	render: function() {
		return (
			<li className='songItem' onClick={this.playSong}>
				<label>
				{this.props.song.title}<br/>{this.props.song.artist}
				</label>
			</li>
		);
	}
})
				// <img src={this.props.song.imgUrl} onClick={this.playSong} />