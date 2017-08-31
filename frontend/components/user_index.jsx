var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var SongActions = require('../actions/song_client_actions.js');
var LikeActions = require('../actions/like_actions.js');
var SongStore = require('../stores/song_store.js');
var LikeStore = require('../stores/likes_store.js');
// var IndexItem = require('./index_item.jsx');
import IndexItem from './index_item.jsx';
// import LikeActions from '../actions/likeActions';

// var DropZone = require('react-dropzone');
// var AWSInfo = require('../../docs/info/s3info.js');
// var Base64 = require('base-64');
// var CryptoJS = require('crypto-js');


export default class UserIndex extends React.Component {
	constructor(props) {
		super(props);
		this.likeChange = this.likeChange.bind(this);

		this.state = {
			songIds: [], songs: [], modalOpen: false, errors: [], mySongs: []
		};
	}

	componentDidMount() {
		// this.songListen = SongStore.addListener(this.songChange);
		// SongActions.fetchSongs();
		this.likeListen = LikeStore.addListener(this.likeChange);
		LikeActions.getLiked();
		//LikeActions.getLikes();
	}

	componentWillUnmount() {
		this.likeListen.remove();
		// this.songListen.remove();
	}

	// openModal() {
	// 	this.setState({ modalOpen: true });
	// 	// debugger;
	// }

	// closeModal() {
	// 	this.setState({ modalOpen: false});
	// }

	errors() {
	    if (this.state.errors.length === 0) {
	      return;
	    } else {
	      return (
	          <ul>
	            {
	              this.state.errors.map(function(error,idx) {
	                return <li key={idx}>{error}</li>
	              })
	            }
	          </ul>
	      )
	    }
	  }

	likeChange() {
		this.setState({songs: LikeStore.all()});
		// console.log(this.state);
		// this.setSongs(this.state.songIds);
	}

	linkToHome() {
		hashHistory.push('/');
	}

	// addSongForm(event) {
	// 	event.preventDefault();
	// 	// SongActions.addSong(event);
	// }

	// addSong() {
	// 	console.log('outerSubmitFn');
	// }

	// postSong(accepted, rejected) {
	// 	// SongActions.postSongAWS(accepted[0]);
	// 	// console.log('rejected: ', rejected);

	//     var file = accepted[0];
	//     var fd = new FormData();
	// 	console.log('accepted: ', file);

	//     var key = (new Date).getTime() + '-' + file.name;    //.split(" ").join("");

	//     //working
	// }


	render() {
		return (
			<div className='user-index'>
					<ul>
						{
							this.state.songs.map(function(song) {
								return <IndexItem song={song} key={song.id + 100000} />
							})
						}
					</ul>
					<p className="alertUserLikes">(Liked Songs go Here)</p>
				</div>
			);
	}
}

// const mapStateToProps = state => ({
// 	likedSongs: state.likes.likedSongs
// })


					// <ul>
					// 	{
					// 		this.state.mySongs.map(function(song) {
					// 			return <IndexItem song={song} key={song.id + 500000} />
					// 		})
					// 	}
					// </ul>
					// <p className="addNewSong" onClick={this.openModal}>Add Song</p>

					// 	 <Modal className='uploadModal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
					//        <div className='exit' onClick={this.closeModal}>X</div>
					//         <form onSubmit={this.addSong}>
					//           {this.errors()}
					//           <br/>

					//           <h3>Add New Song!</h3>
					//           <br/>
					//           <label>Title:
					//             <input type='text' value={this.state.songTitle} onChange={this.nameChange}/>
					//           </label>
					//           <label>Artist:
					//             <input type="text" value={this.state.songArtist} onChange={this.artistChange}/>
					//           </label>
					//           <br/>

					//           <DropZone onDrop={this.postSong}>

					//           	<a className="upload">Upload Song!</a>

					//           </DropZone>

					//           <input className='submit' disabled='True' type='submit' value='Add Song!'/>

					//         </form>
					//       </Modal>