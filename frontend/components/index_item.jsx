var React = require('react');
var SongActions = require('../actions/song_client_actions.js');
var hashHistory = require('react-router').hashHistory;
var SessionStore = require('../stores/session_store.js');
var PlayStore = require('../stores/play_store.js');
import { connect } from 'react-redux';
import { createLike, unlike } from '../actions/likeActions.js';


class IndexItem extends  React.Component {
	constructor(props) {
		super(props)

		this.userPresence = this.userPresence.bind(this);
		this.artistRoute = this.artistRoute.bind(this);
		this.createLike = this.createLike.bind(this);
		this.unlike = this.unlike.bind(this);
		this.buttonToggle = this.buttonToggle.bind(this);
		this.checkIfLiked = this.checkIfLiked.bind(this);

		this.state = {
			userLoggedIn: SessionStore.userPresent(), songPlaying: false, 
		};
	}

	componentDidMount() {
		this.userListener = SessionStore.addListener(this.userPresence);
		// this.playListen = PlayStore.addListener(this.playChange);
		// console.log(this.props);
	}

	componentWillUnmount() {
		this.userListener.remove();
		// this.playListen.remove();
	}

	userPresence() {
		this.setState({ userLoggedIn: SessionStore.userPresent() });
	}

	playSong(event) {
		event.preventDefault();
		SongActions.playSong(this.props.song.id);
	}

	addSong(event) {
		event.preventDefault();
		SongActions.addSong(this.props.song.id);
	}

	artistRoute(event) {
		event.preventDefault();
		// var betterRoute = this.props.song.artist.split(" ").join("%20");
		hashHistory.push("artists/"+ this.props.song.artist);
	}

	createLike(event) {
		event.preventDefault();
		this.props.createLike(this.props.song.id);
	}

	unlike(event) {
		event.preventDefault();
		this.props.unlike(this.props.song.id);
	}

	checkIfLiked() {
		const allLikedSongs = this.props.myLikedSongs;

		for (let i = 0; i < allLikedSongs.length; i++) {
			if (this.props.song.id === allLikedSongs[i].id) {
				return true;
			}
		};
		// console.log("out of loop")
		return false;
	}

	buttonToggle() {
		if (this.state.userLoggedIn) {
			if (this.checkIfLiked()) {
				console.log("checkIfLiked")
				return <button className="like" onClick={this.unlike}>Unlike</button>
			} else {
				return <button className="like" onClick={this.createLike}>Like</button>
			}
		} else {
			return <div id='imgSpace'/>
		}
	}

	render() {
		return (
			<li className='songItem'>
				<img src={this.props.song.img_url} onClick={this.artistRoute} />
				<button className="imgPlay" id='play' onClick={this.addSong.bind(this)}>&#43;</button>
				<button className="imgPlay" id='add' onClick={this.playSong.bind(this)}>▶</button>
				{this.buttonToggle()}
				<br/>
				<label className="indexTitle">
				{this.props.song.title}
				</label><br/>
				<label className="artistLink" onClick={this.artistRoute} artist={this.props.song.artist}>{this.props.song.artist}</label>
			</li>
		);
	}
}


const mapStateToProps = state => ({
	myLikedSongs: state.likes.likedSongs
})

const mapDispatchToProps = dispatch => ({
	createLike: songid => dispatch(createLike(songid)),
	unlike: songid => dispatch(unlike(songid))
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexItem);