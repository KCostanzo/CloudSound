var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var SongActions = require('../actions/song_client_actions.js');
var LikeActions = require('../actions/like_actions.js');
var SongStore = require('../stores/song_store.js');
var LikeStore = require('../stores/likes_store.js');
var IndexItem = require('./index_item.jsx');
var DropZone = require('react-dropzone');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			songIds: [], songs: [], modalOpen: false, errors: [],
		}
	},

	componentDidMount: function() {
		// this.songListen = SongStore.addListener(this.songChange);
		// SongActions.fetchSongs();
		this.likeListen = LikeStore.addListener(this.likeChange);
		LikeActions.getLiked();
	},

	componentWillUnmount: function() {
		this.likeListen.remove();
		// this.songListen.remove();
	},

	openModal: function() {
		this.setState({ modalOpen: true });
		// console.log('working');
		// debugger;
	},

	closeModal: function() {
		this.setState({ modalOpen: false});
	},

	errors: function() {
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
	  },

	likeChange: function() {
		this.setState({songs: LikeStore.all()});
		// this.setSongs(this.state.songIds);
	},

	linkToHome: function() {
		hashHistory.push('/');
	},

	// addSongForm: function(event) {
	// 	event.preventDefault();
	// 	// SongActions.addSong(event);
	// },

	addSong: function() {
		console.log('outerSubmitFn');
	},

	postSong: function(accepted, rejected) {
		// SongActions.postSongAWS(songData);
		console.log('accepted: ', accepted);
		console.log('rejected: ', rejected);
		console.log('song upload');
	},

	// songChange: function() {
	// 	this.setState({songs: SongStore.likedSongs(this.state.songIds)});
	// },

	// setSongs: function() {
	// 	this.setState({songs: SongStore.likedSongs(this.state.songIds)});
	// },

	render: function() {
		return (
			<div className='user-index'>
					<ul>
						{
							this.state.songs.map(function(song) {
								return <IndexItem song={song} key={song.id + 1000} />
							})
						}
					</ul>
					<p className="alertUserLikes">(Liked Songs go Here)</p>
					<p className="addNewSong" onClick={this.openModal}>Add Song</p>

						 <Modal className='uploadModal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
					       <div className='exit' onClick={this.closeModal}>X</div>
					        <form onSubmit={this.addSong}>
					          {this.errors()}
					          <br/>

					          <h3>Add New Song!</h3>
					          <br/>
					          <label>Title:
					            <input type='text' value={this.state.songTitle} onChange={this.nameChange}/>
					          </label>
					          <br/>
					          <label>Artist:
					            <input type="text" value={this.state.songArtist} onChange={this.artistChange}/>
					          </label>
					          <br/>

					          <DropZone onDrop={this.postSong}>

					          	<a className="upload">Upload Song!</a>

					          </DropZone>

					          <input className='submit' disabled='True' type='submit' value='Add Song!'/>

					        </form>
					      </Modal>
				</div>
			);
	}
})