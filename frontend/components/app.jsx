var React = require('react');
var Navbar = require('./navbar.jsx');

module.exports = React.createClass({
  render: function() {
    return (
    <div id='main'>
      <Navbar/>
      {this.props.children}
    </div>)
  }
});
