var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var Modal = require('react-modal');


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
    } else {
      this.setState({errors: Store.errors(), password: ''});
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
      <a className="unlogged" onClick={this.openModal} disabled={this.props.currentlyClicked}>Sign Up</a>

      <Modal className='modal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
       <div className='exit' onClick={this.closeModal}>X</div>
        <form onSubmit={this.signupUser}>

          {this.errors()}
          <br/>

          <h3>Sign Up!</h3>
          <br/>

          <label>Username:
            <input type='text' value={this.state.username} onChange={this.nameChange}/>
          </label>
          <br/>

          <label>Password:
            <input type="password" value={this.state.password} onChange={this.passChange}/>
          </label>
          <br/>

          <input className='submit' type='submit' value='Sign Up!'/>
        </form>
      </Modal>
      </div>
    )
  }
});
