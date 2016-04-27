var Util = require('../util/user_session_api_util.js');

module.exports = {
  fetchCurrentUser: function() {
    Util.fetchCurrentUser();
  },

  loginUser: function(user) {
    Util.loginUser(user);
  },

  createUser: function(user) {
    Util.createUser(user);
  },

  logoutUser: function(user) {
    Util.logoutUser(user);
  },

  updateUser: function(user) {
    Util.updateUser(user);
  }
}
