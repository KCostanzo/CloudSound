var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var SongActions = require('../actions/song_client_actions.js');
var LikeActions = require('../actions/like_actions.js');
var SongStore = require('../stores/song_store.js');
var LikeStore = require('../stores/likes_store.js');
var IndexItem = require('./index_item.jsx');
var DropZone = require('react-dropzone');
var AWSInfo = require('../../docs/info/s3info.js');
var Base64 = require('base-64');
var CryptoJS = require('crypto-js');

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
		// SongActions.postSongAWS(accepted[0]);
		// console.log('rejected: ', rejected);

	    var file = accepted[0];
	    var fd = new FormData();
		console.log('accepted: ', file);

	    var key = (new Date).getTime() + '-' + file.name;    //.split(" ").join("");
		// console.log('key: ' + key);

		var accessKeyID = AWSInfo.AccessKey;
		var secretAccessKey = AWSInfo.SKey;

		var bucket = "musicstoreforapp";
		var region = "us-west-1"; // overwrite region
		var dateObj = new Date; // overwrite date
		var mm = dateObj.getMonth() + 1;
		var dd = dateObj.getDate();
		var date = [dateObj.getFullYear(), mm<10 ? '0'+ mm: mm, dd<10 ? '0'+ dd : dd].join('')
		// var date = "20170106";
		// console.log(date);
		var serviceName = "s3";

		function getSignatureKey(kkey, dateStamp, regionName, serviceName) {
		   var kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + kkey);
		   		// console.log(kDate.toString(CryptoJS.enc.Hex));
		   var kRegion = CryptoJS.HmacSHA256(regionName, kDate);
		   		// console.log(kRegion);
		   var kService = CryptoJS.HmacSHA256(serviceName, kRegion);
		   		// console.log(kService);
		   var kSigning = CryptoJS.HmacSHA256("aws4_request", kService);
		   		//HmacSHA256 for signature v4, use SHA1 to test
		  		// console.log(kSigning);
		   return kSigning;
		};

    //     var POLICY_JSON = { "expiration": "2020-12-28T00:00:00Z",
    //             "conditions": [
    //             ["bucket", "musicstoreforapp"],
    //             ["starts-with", "$key", ""],
    //             {"acl": "public-read"},
    //             ["starts-with", "$Content-Type", ""],
    //             ["content-length-range", 0, 524288000],
    //             {"x-amz-server-side-encryption": "AES256"},
    //             ["starts-with", "$x-amz-meta-tag", ""],

				// {"x-amz-credential": accessKeyID + "/" + date + "/" + region + "/" + serviceName +"/aws4_request"},
				// {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
				// {"x-amz-date": date + "T000000Z" }
    //             ]
    //           };

                // {"success_action_redirect": this.successAction},
                // {"x-amz-meta-filename": this.get('filename')},

        var policyBase64 = Base64.encode(JSON.stringify(POLICY_JSON));
	    console.log(policyBase64);

	    fd.append('key', key);
	    fd.append('bucket', bucket);
	    fd.append('acl', 'public-read');
	    fd.append('Content-Type', file.type);  
	    fd.append('AWSAccessKeyID', accessKeyID);
	    fd.append('policy', policyBase64);
	    fd.append('x-amz-credential', accessKeyID + "/" + date + "/" + region + "/" + serviceName +"/aws4_request");
	    fd.append('x-amz-algorithm', 'AWS4-HMAC-SHA256');
	    fd.append('x-amz-date', date + "T000000Z");

	    var signatureKey = getSignatureKey(secretAccessKey, date, region, serviceName);  //for version 4
	    // var signatureKey = secretAccessKey; //for original signature version

		var s3Signature = Base64.encode(CryptoJS.HmacSHA256(policyBase64, signatureKey));
		// .toString(CryptoJS.enc.Hex)
		console.log('s3Signature:', s3Signature);

	    fd.append('x-amz-signature', s3Signature);
	    fd.append('signature', s3Signature);

	    fd.append('file', file);

	    var xhr = new XMLHttpRequest();

	    xhr.upload.addEventListener("progress", this.uploadProgress, false); 
	    xhr.addEventListener("load", this.uploadComplete, false);
	    xhr.addEventListener("error", this.uploadFailed, false);
	    xhr.addEventListener("abort", this.uploadCanceled, false);

	    xhr.open('POST', 'https://musicstoreforapp.s3.amazonaws.com/', true); //MUST BE LAST LINE BEFORE SEND 
	    xhr.send(fd);
	},

// Helper functions

	uploadProgress: function(evt) {
    	// if (evt.lengthComputable) {
     // 	 var percentComplete = Math.round(evt.loaded * 100 / evt.total);
     //  	document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
   		//  }
    	// else {
     //  		document.getElementById('progressNumber').innerHTML = 'unable to compute';
    	// }
    	console.log('working');
  	},

  	uploadComplete:	function(evt) {
    /* This event is raised when the server send back a response */
   		 alert("Done - " + evt.target.responseText );
  	},

	uploadFailed: function(evt) {
	    alert("There was an error attempting to upload the file." + evt);
	},

	uploadCanceled: function(evt) {
	    alert("The upload has been canceled by the user or the browser dropped the connection.");
	},

	successAction: function() {
		console.log('successActionRedirect');
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