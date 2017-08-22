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

export default class CoverIndex extends React.Component {
	constructor(props) {
		super(props)

		this.songChange = this.songChange.bind(this);

		this.state = {
			songs: []
		};
	}

	componentDidMount() {
		this.songListener = SongStore.addListener(this.songChange);
		// this.userListen = SessionStore.addListener(this.userChange);
		// console.log("fetching all songs");
		SongActions.fetchSongs();
		LikeActions.getLiked();
		// this.props.getLikes();
	}

	componentWillUnmount() {
		this.songListener.remove();
		// this.userListen.remove();
	}

	songChange() {
		this.setState({songs: SongStore.all()});
	}

	// userChange() {
	// 	LikeActions.getLiked()
	// 	// this.setState({ likes: LikeActions.getLiked() });
	// }

	//new tag line: change your tone;

	render() {
		return (
			<div className='cover-index'>
					<ul>
						{
							this.state.songs.map(function(song) {
								return <IndexItem song={song} key={song.id}/>
							})
						}
					</ul>
				</div>
			);
	}
}


// const mapStateToProps = state => ({
// 	songs: state.songs,
// 	likedSongs: state.likedSongs
// })


// const mapDispatchToProps = dispatch => ({
// 	getLikes: () => dispatch(getLikes())
// })


// export default connect(mapStateToProps, mapDispatchToProps)(CoverIndex);