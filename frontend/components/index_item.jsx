var React = require('react');
var SongActions = require('../actions/song_client_actions.js');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
	playSong: function(event) {
		event.preventDefault();
		SongActions.playSong(this.props.song.id);
	},

	artistRoute: function(event) {
		event.preventDefault();
		// var betterRoute = this.props.song.artist.split(" ").join("%20");
		hashHistory.push("artists/"+ this.props.song.artist);
	},

	render: function() {
		return (
			<li className='songItem'>
				<img src={this.props.song.img_url} onClick={this.playSong}/>
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