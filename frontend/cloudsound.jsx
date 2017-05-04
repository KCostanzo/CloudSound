var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Likes = require('./stores/likes_store.js');
var ClientActions = require('./actions/client_actions.js');

var App = require('./components/app.jsx');
var CoverPage = require('./components/cover_index.jsx');
var ArtistIndex = require('./components/artist_index.jsx');
var UserIndex = require('./components/user_index.jsx');


ClientActions.fetchCurrentUser();

var routes = (
  <Route path='/' component={App}>
  	<IndexRoute component={CoverPage} />
  	<Route path="artists/:artist" component={ArtistIndex} />
  	<Route path="users/:user_id" component={UserIndex} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
