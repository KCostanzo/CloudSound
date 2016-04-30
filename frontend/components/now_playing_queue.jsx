var React = require('react');
var PlayStore = require('../stores/play_store.js');
var ClientActions = require('../actions/song_client_actions.js');
var QueueItem = require('./queue_item.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {nowPlaying: null, queue: []};
	},

	componentDidMount: function() {
		this.playListen = PlayStore.addListener(this.playChange);
	},

	componentWillUnmount: function() {
		this.playListen.remove();
	},

	playChange: function() {
		if (PlayStore.nowPlaying()) {
		this.setState({nowPlaying: PlayStore.nowPlaying(), queue: PlayStore.queue() });
		}
	},

	render: function() {
		if (this.state.nowPlaying) {
			return (
				<div className="queueDisplay">
				<h3>Current Queue</h3>
				<ul>
					{
						this.state.queue.map(function(queueSong, idx) {
							return <QueueItem song={queueSong} key={idx} idx={idx} />
						})
					}
				</ul>
				</div>
				)
			} else {
				return <div/>
		}
	}
});