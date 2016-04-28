var React = require('react');
var Navbar = require('./navbar.jsx');
var CoverPage = require('./cover_index.jsx');
var NowPlayingBar = require('./now_playing_bar.jsx');

module.exports = React.createClass({
  render: function() {
    return (
    <div id='main'>
      <Navbar/>
      <CoverPage />
      {this.props.children}
      <NowPlayingBar/>
    </div>)
  }
});
