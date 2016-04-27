var React = require('react');
var Navbar = require('./navbar.jsx');
var CoverPage = require('./cover_index.jsx');

module.exports = React.createClass({
  render: function() {
    return (
    <div id='main'>
      <Navbar/>
      <CoverPage />
      {this.props.children}
    </div>)
  }
});
