var React = require('react');
var Navbar = require('./navbar.jsx');
var CoverPage = require('./cover_index.jsx');
var NowPlayingBar = require('./now_playing_bar.jsx');
var PlayQueue = require('./now_playing_queue.jsx');

module.exports = React.createClass({
  render: function() {
    return (
    <div id='main'>
      <Navbar/>
      {this.props.children}
      <PlayQueue />
      <NowPlayingBar/>
    </div>)
  }
});
        // <video autoPlay loop>
        //   <source
        //     src="http://res.cloudinary.com/mr-costanzo/video/upload/v1461954942/videoplayback_rg6kkg.mp4"
        //     type="video/mp4"/>
        // </video>
