var React = require('react');
var PlayStore = require('../stores/play_store.js');
var ClientActions = require('../actions/song_client_actions.js');

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
	    var song = document.getElementById('nowPlaying');
	    if (!song) {
	    	return;
	    }
	    if (song.volume) {
	      song.volume = 0.89;
	    }
	 },

	playChange: function() {
		if (PlayStore.nowPlaying()) {
			if (this.state.currentSong !== PlayStore.nowPlaying()) {
				this.setState({currentSong: PlayStore.nowPlaying(), playing: true});
			}
		}
	},

	songOver: function() {
		this.setState({currentSong: null, playing: false});
		ClientActions.nextSong();
	},

	play: function(event) {
		event.preventDefault();
		var play = document.getElementById('nowPlaying').play();
		this.setState({currentSong: this.state.currentSong, playing: true});
	},

	pause: function(event) {
		event.preventDefault();
		document.getElementById('nowPlaying').pause();
		this.setState({currentSong: this.state.currentSong, playing: false});
	},

	setProgress: function() {
		var audioPlayer = document.getElementById('nowPlaying');
		var bar = document.getElementById('bar');
		bar.style.width = parseInt(((audioPlayer.currentTime / audioPlayer.duration)*100), 10) + "%";
	},

	updateProgress: function(e) {
		e.preventDefault();
		var audioPlayer = document.getElementById('nowPlaying');
		var clickSpot = (e.pageX - this.refs['progressBar'].offsetLeft) / this.refs["progressBar"].offsetWidth;
		var clickTime = clickSpot * audioPlayer.duration;

		audioPlayer.currentTime = clickTime;
	}, 

	setSound: function() {
		const audioPlayer = document.getElementById('nowPlaying');
		const innerBar = document.getElementById('innerSoundBar');

		innerBar.style.width = (audioPlayer.volume * 100) + "%";
	},

	soundAdjust: function(e) {
		e.preventDefault();
		const audioPlayer = document.getElementById('nowPlaying');
		let adjustBar = document.getElementById('audioAdjust');
		let clickSoundSpot = (e.pageX - this.refs['soundBar'].offsetLeft) / this.refs['soundBar'].offsetWidth;
		//console.log(clickSoundSpot);

		audioPlayer.volume = clickSoundSpot;
		this.setSound();
	},

	nextSong: function(event) {
		event.preventDefault();
		ClientActions.nextSong();
	},

	render: function() {
		var song, player, playToggle;

		if (this.state.currentSong) {
			song = (<audio id="nowPlaying" onTimeUpdate={this.setProgress} onEnded={this.songOver} src={this.state.currentSong.audio_url} autoPlay/>)
		} else {
			song = (<div/>);
		}

		if (this.state.playing) {
			playToggle = <button className="playControlToggle" onClick={this.pause}>▌▌</button>;
		} else {
			playToggle = <button className="playControlToggle" onClick={this.play}>▶</button>
		}

		var next = (<button className="playControl" onClick={this.nextSong}>▶▌</button>);
		var progress = (<div id='progress' ref="progressBar" onClick={this.updateProgress} ><div id='bar'></div></div>);
		let audioAdjust = (<div id="outerSoundBar" ref="soundBar" onClick={this.soundAdjust} ><div id="innerSoundBar"></div></div>);

		if (this.state.currentSong) {
			player = (<div className='playBar'>{song}{playToggle}{next} {this.state.currentSong.title}, &nbsp; {this.state.currentSong.artist} {progress} {audioAdjust}</div>)
		} else {
			player= <div/>
		}

		return player;
	}
});