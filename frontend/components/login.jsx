var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var Modal = require('react-modal');
var Store = require('../stores/session_store.js');


module.exports = React.createClass ({
  getInitialState: function() {
    return({ modalOpen: false, username: '', password: '', errors: []});
  },

  closeModal: function() {
    this.setState({modalOpen: false});
  },

  openModal: function() {
    this.setState({modalOpen: true});
  },

  loginUser: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      password: this.state.password
    }};
    ClientActions.loginUser(user);
    if (Store.userPresent()) {
      this.setState({username: '', password: ''})
      this.closeModal();
      console.log('succcesful login!');
    } else {
      this.setState({errors: Store.errors()});
    }
  },

  guestLogin: function(event) {
    var user = { user: {
      username: 'guest',
      password: 'password369'
    }};
    ClientActions.loginUser(user);
    console.log('guest login success');
  },

  nameChange: function(event) {
    this.setState({username: event.target.value});
  },

  passChange: function(event) {
    this.setState({password: event.target.value})
  },

  render: function() {
    return (
      <div>
      <button onClick={this.openModal}>Log In</button>
      <button onClick={this.guestLogin}>Guest Account</button>

      <Modal className='modal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
        <form onSubmit={this.loginUser}>

          <label>Username:
            <input type='text' value={this.state.username} onChange={this.nameChange}/>
          </label>
          <br/>

          <label>Password:
            <input type="password" value={this.state.password} onChange={this.passChange}/>
          </label>
          <br/>

          <input type='submit' value='Login!'/>

        </form>
      </Modal>
      </div>
    )
  }
});
