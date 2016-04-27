var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');

module.exports = {
  login: function(user) {
    Dispatcher.dispatch({
      actionType: Constants.LOGIN_USER,
      user: user
    });
    console.log('login success');
  },

  create: function(user) {
    Dispatcher.dispatch({
      actionType: Constants.USER_RECEIVED,
      user: user
    });
  },

  receiveError: function(errors) {
    Dispatcher.dispatch({
      actionType: Constants.ERROR_RECEIVED,
      errors: errors
    });
  },

  logout: function(user) {
    Dispatcher.dispatch({
      actionType: Constants.LOGOUT_USER,
      user: user
    });
  },

  update: function(user) {
    Dispatcher.dispatch({
      actionType: Constants.USER_UPDATED,
      user: user
    });
  }
}
