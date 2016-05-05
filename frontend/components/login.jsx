var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var Modal = require('react-modal');
var Store = require('../stores/session_store.js');
var LikeActions = require('../actions/like_actions.js');


module.exports = React.createClass ({
  getInitialState: function() {
    return({ modalOpen: false, username: '', password: '', errors: []});
  },

  closeModal: function() {
    this.setState({modalOpen: false});
    this.props.enableButtons();
  },

  openModal: function() {
    this.setState({modalOpen: true});
    this.props.clickedLogin();
  },

  loginUser: function(event) {
    event.preventDefault();
    Store.emptyErrors();
    var user = {user: {
      username: this.state.username,
      password: this.state.password
    }};
    ClientActions.loginUser(user);
    if (Store.userPresent()) {
      this.setState({username: '', password: ''})
      this.closeModal();
    } else {
      this.setState({errors: Store.errors(), password: ''});
    }
  },

  guestLogin: function(event) {
    var user = { user: {
      username: 'guest',
      password: 'password369'
    }};
    ClientActions.loginUser(user);
  },

  nameChange: function(event) {
    this.setState({username: event.target.value});
  },

  passChange: function(event) {
    this.setState({password: event.target.value})
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

  render: function() {
    return (
      <div>
      <button className="unlogged" onClick={this.openModal} disabled={this.props.currentlyClicked}>Log In</button>
      <button className="unlogged" onClick={this.guestLogin} disabled={this.props.currentlyClicked}>Guest Account</button>

      <Modal className='modal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
        <form onSubmit={this.loginUser}>
          {this.errors()}
          <br/>

          <h3>Sign In!</h3>
          <br/>

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
