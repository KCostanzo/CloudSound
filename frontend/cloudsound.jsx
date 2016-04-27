var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Store = require('./stores/session_store.js');
var UStore = require('./stores/user_store.js');
var ClientActions = require('./actions/client_actions.js');

var App = require('./components/app.jsx');
var Login = require('./components/login.jsx');

ClientActions.fetchCurrentUser();

var routes = (
  <Route path='/' component={App}>
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
