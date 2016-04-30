var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SongActions = require('../actions/song_client_actions.js');
var SongStore = require('../stores/song_store.js');

module.exports = React.createClass({
  getInitialState: function(){
    return({songName: ""});
  },

  componentDidMount: function(){
    this.songListener = SongStore.addListener(this.getSongs);
    SongActions.fetchSongs();
  },

  componentWillUnmount: function(){
    this.songListener.remove();
  },

  fillSongName: function(e){
    var song = SongStore.find(e.target.value);
    this.setState({songName: ""});
    hashHistory.push({pathname: 'artists/' + song.artist});
  },

  getSongs: function(){
    return SongStore.findSongs(this.state.songName);
  },

  updateSong: function(e){
    this.setState({songName: e.target.value});
  },

  render: function(){
    var songs = this.getSongs();
    var songList = [];
    if(songs.length > 0){
      songs.forEach(function(song){
        if(songList.length < 9){
          songList.push(<li className="songListItem" key={song.id} song={song} value={song.id}>{song.title}</li>);
        }
      });
    }  else{
      songList="";
    }

    return (
      <div className="searchBox">
        <input className="songSearch" type="text"
            placeholder="Song Name Here"
            onChange={this.updateSong} value={this.state.songName} />
        <ul className="songSearchList" onClick={this.fillSongName}
        >{songList}</ul>
      </div>
    );
  }
});
