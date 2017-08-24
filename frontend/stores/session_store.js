var Store = require('flux/utils').Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
// var SessionConstants = require("../constants/allConstants.js");
import SessionConstants from '../constants/allConstants.js';

var SessionStore = new Store(AppDispatcher);

var _currentUser = null;
var _errors = [];
var _userPresent = false;

var loginUser = function(user) {
  _currentUser = user;
  _userPresent = true;
};

var logout = function(user) {
  _currentUser = null;
  _userPresent = false;
};

var addErrors = function(errors) {
  var temp = errors.responseText;
  if (temp) {
  _errors.push(temp);
  }
};

SessionStore.errors = function() {
  return _errors;
};

SessionStore.emptyErrors = function() {
  _errors = [];
};

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.userPresent = function() {
  return _userPresent;
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN_USER:
      loginUser(payload.user);
      break;
    case SessionConstants.LOGOUT_USER:
      logout(payload.user);
      break;
    case SessionConstants.ERROR_RECEIVED:
      addErrors(payload.errors);
      break;
  }
  this.__emitChange();
};

window.Store = SessionStore;

module.exports = SessionStore;
