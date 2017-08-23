var React = require('react');
var SongActions = require('../actions/song_client_actions.js');
var hashHistory = require('react-router').hashHistory;
// var LikeActions = require('../actions/like_actions.js');
var SessionStore = require('../stores/session_store.js');
var LikeStore = require('../stores/likes_store.js');
var PlayStore = require('../stores/play_store.js');
import { connect } from 'react-redux';
import { createLike, unlike } from '../actions/likeActions.js';


class IndexItem extends  React.Component {
	constructor(props) {
		super(props)

		this.userPresence = this.userPresence.bind(this);
		this.likesUpdate = this.likesUpdate.bind(this);
		this.artistRoute = this.artistRoute.bind(this);
		this.createLike = this.createLike.bind(this);
		this.unlike = this.unlike.bind(this);

		this.state = {
			userLoggedIn: SessionStore.userPresent(), songPlaying: false, songLiked: LikeStore.songLiked(this.props.song.id), likedSongs: this.props.likedSongs
		};
		// songLiked: LikeStore.songLiked(this.props.song.id),
	}

	componentDidMount() {
		this.userListener = SessionStore.addListener(this.userPresence);
		this.likeStoreListen = LikeStore.addListener(this.likesUpdate);
		// this.playListen = PlayStore.addListener(this.playChange);
		// console.log(this.props);
	}

	componentWillUnmount() {
		this.userListener.remove();
		this.likeStoreListen.remove();
		// this.playListen.remove();
	}

	userPresence() {
		this.setState({ userLoggedIn: SessionStore.userPresent() });
	}

	likesUpdate() {
		this.setState({ songLiked: LikeStore.songLiked(this.props.song.id)})
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
		// LikeActions.createLike(this.props.song.id);
		this.props.createLike(this.props.song.id);
	}

	unlike(event) {
		event.preventDefault();
		// LikeActions.unlike(this.props.song.id);
		this.props.unlike(this.props.song.id);
	}

	checkIfLiked() {
		const allLikedSongs = this.props.likedSongs;

	}

	buttonToggle() {
		if (this.state.userLoggedIn) {
			if (this.props.liked) {
				return <button className="like" onClick={this.unlike}>Unlike</button>
			} else{
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


const mapDispatchToProps = dispatch => ({
	createLike: songid => dispatch(createLike(songid)),
	unlike: songid => dispatch(unlike(songid))
})

export default connect(null, mapDispatchToProps)(IndexItem);

				// <img src={this.props.song.imgUrl} onClick={this.playSong} />