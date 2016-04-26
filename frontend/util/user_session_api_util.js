// var ClientActions = require('../actions/client_actions.js');
var ServerActions = require('../actions.user_server_actions.js');

module.exports = {
  loginUser: function(loginData) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: loginData,
      success: function(user) {
        ServerActions.login(user);
      },
      error: function(error) {
        ServerActions.receiveError(error);
      }
    });
  },

  createUser: function(userData) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: userData,
      success: function(user) {
        ServerActions.login(user);
      },
      error: function(error) {
        ServerActions.receiveError(error);
      }
    });
  },

  logoutUser: function(user) {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: function(user) {
        ServerActions.logout(user);
      }
    });
  },

  updateUser: function(userData) {
    $.ajax({
      method: 'PATCH',
      url: 'api/users/' + userData.id,
      data: userData,
      success: function(user) {
        ServerActions.update(user)
      }
    })
  }
}
