var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
// var UserConstants = require('../constants/allConstants.js');
import UserConstants from '../constants/allConstants.js';

var UserStore = new Store(Dispatcher);

var _users = {};

var setUser = function(user) {
  _users[user.id] = user;
};

// var resetUsers = function(users) {};

UserStore.allUsers = function() {
  return Object.keys(_users).map(function(key) {
    return _users[key];
  })
};

UserStore.find = function(id) {
  return _users[id];
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      setUser(payload.user);
      break;
    case UserConstants.USER_UPDATED:
      setUser(payload.user);
      break;
  }
  this.__emitChange();
};

window.UserStore = UserStore;

module.exports = UserStore;
