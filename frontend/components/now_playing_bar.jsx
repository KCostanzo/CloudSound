var React = require('react');
var PlayStore = require('../stores/play_store.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {currentSong: null, playing: false};
	},

	componentDidMount: function() {
		this.playListen = PlayStore.addListener(this.playChange);
	},

	componentWillUnmount: function() {
		this.playListen.remove();
	},

	componentDidUpdate: function() {
	    var song = document.getElementsByTagName('audio')[0];
	    if (!song) {
	    	return;
	    }
	    if (song.volume) {
	      song.volume = 0.54;
	    }
	 },

	playChange: function() {
		if (PlayStore.nowPlaying()) {
		this.setState({currentSong: PlayStore.nowPlaying(), playing: true});
		}
	},

	songOver: function() {
		this.setState({currentSong: null, playing: false});
	},

	play: function(event) {
		event.preventDefault();
		var play = document.getElementsByTagName('audio')[0].play();
		this.setState({currentSong: this.state.currentSong, playing: true});
	},

	pause: function(event) {
		event.preventDefault();
		document.getElementsByTagName('audio')[0].pause();
		this.setState({currentSong: this.state.currentSong, playing: false});
	},

	render: function() {
		var song, player, playToggle;
		if (this.state.currentSong) {
			song = (<audio onEnded={this.songOver} src={this.state.currentSong.audio_url} autoPlay/>)
		} else {
			song = (<div/>);
		}

		if (this.state.playing) {
			playToggle = <button className="playControl" onClick={this.pause}>▌▌</button>;
		} else {
			playToggle = <button className="playControl" onClick={this.play}>▶</button>
		}

		if (this.state.currentSong) {
			player = (<div className='playBar'>{song}{playToggle}</div>)
		} else {
			player= <div/>
		}

		return player;
	}
});