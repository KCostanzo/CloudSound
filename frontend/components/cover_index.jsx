var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SongActions = require('../actions/song_client_actions.js');
var SongStore = require('../stores/song_store.js');
var SessionStore = require('../stores/session_store.js');
var LikeStore = require('../stores/likes_store.js');
// var IndexItem = require('./index_item.jsx');
import IndexItem from './index_item.jsx';
var LikeActions = require('../actions/like_actions.js');
// import LikeAction from '../actions/likeActions';
import {connect} from 'react-redux';
import {getLikes} from '../actions/likeActions';
import {getSongs} from '../actions/songActions';

class CoverIndex extends React.Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {
		// this.userListen = SessionStore.addListener(this.userChange);
		console.log("fetching all songs");
		this.props.getLikes();
		this.props.getSongs();
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps);
	// }

	componentWillUnmount() {
		// this.userListen.remove();
	}

	// checkLikeStatus(songId) {
	// 	const likedSongs = this.props.likedSongs;
	// 	for (let i = 0; i < likedSongs.length; i++) {
	// 		if (songId === likedSongs[i].id) {
	// 			return true;
	// 		}
	// 	};
	// 	return false;
	// }

	//new tag line: change your tone;

	render() {
		console.log(this.props);
		const that = this;
		return (
			<div className='cover-index'>
					<ul>
						{
							this.props.songs.map(function(song) {
								return <IndexItem song={song} key={song.id} />
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