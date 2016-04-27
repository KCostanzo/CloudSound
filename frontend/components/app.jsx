var React = require('react');
var Login = require('./login.jsx');
var SignUp = require('./sign_up.jsx');

module.exports = React.createClass({
  render: function() {
    return (
    <div id='main'>
      <SignUp/>
      <Login/>
    </div>)
  }
});
