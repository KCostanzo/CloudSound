var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var Modal = require('react-modal');


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

  signupUser: function(event) {
    event.preventDefault();
    Store.emptyErrors();
    var user = {user: {
      username: this.state.username,
      password: this.state.password
    }};
    ClientActions.createUser(user)
    ClientActions.loginUser(user);
    if (Store.userPresent()) {
      this.setState({username: '', password: ''})
      this.closeModal();
      console.log('succcesful sign up!');
    } else {
      this.setState({errors: Store.errors()});
    }
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
      <button className="unlogged" onClick={this.openModal}>Sign Up</button>

      <Modal className='modal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
        <form onSubmit={this.signupUser}>

          {this.errors()}
          <br/>

          <label>Username:
            <input type='text' value={this.state.username} onChange={this.nameChange}/>
          </label>
          <br/>

          <label>Password:
            <input type="password" value={this.state.password} onChange={this.passChange}/>
          </label>
          <br/>

          <input type='submit' value='Sign Up!'/>
        </form>
      </Modal>
      </div>
    )
  }
});
