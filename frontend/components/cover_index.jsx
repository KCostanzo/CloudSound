var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SongActions = require('../actions/song_client_actions.js');
var SongStore = require('../stores/song_store.js');
var SessionStore = require('../stores/session_store.js');
var LikeStore = require('../stores/likes_store.js');
// var IndexItem = require('./index_item.jsx');
import IndexItem from './index_item.jsx';
// import LikeAction from '../actions/likeActions';
import {connect} from 'react-redux';
import {getLikes} from '../actions/likeActions';
import {getSongs} from '../actions/songActions';

class CoverIndex extends React.Component {
	constructor(props) {
		super(props)

		this.userChange = this.userChange.bind(this);

		this.state = {
			userLoggedIn: SessionStore.userPresent()
		}

	}

	componentDidMount() {
		this.userListen = SessionStore.addListener(this.userChange);
		// console.log("fetching all songs");
		this.props.getSongs();
		// if (this.state.userLoggedIn) {
			// this.props.getLikes();
		// }
	}

	userChange() {
		this.setState({ userLoggedIn: SessionStore.userPresent() });
		if (this.state.userLoggedIn) {
			this.props.getLikes();
		}
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps);
	// }

	componentWillUnmount() {
		this.userListen.remove();
	}

	checkLikeStatus(songId) {
		const likedSongs = this.props.likedSongs;
		for (let i = 0; i < likedSongs.length; i++) {
			if (songId === likedSongs[i].id) {
				return true;
			}
		};
		// console.log("out of check like loop");
		return false;
		//insert in IndexItem as prop if needed liked={that.checkLikeStatus(song.id)}
	}

	//new tag line: change your tone;

	render() {
		const that = this;
		return (
			<div className='cover-index'>
					<ul>
						{
							this.props.songs.map(function(song) {
								return <IndexItem song={song} key={song.id}/>
							})
						}
					</ul>
				</div>
			);
	}
}


const mapStateToProps = state => ({
	songs: state.songs.songs,
	likedSongs: state.likes.likedSongs
})


const mapDispatchToProps = dispatch => ({
	getSongs: () => dispatch(getSongs()),
	getLikes: () => dispatch(getLikes())
})


export default connect(mapStateToProps, mapDispatchToProps)(CoverIndex);