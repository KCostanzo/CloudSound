var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Store = require('./stores/session_store.js');
var SongStor = require('./stores/song_store.js');
var PlayStore = require('./stores/play_store.js');
var UStore = require('./stores/user_store.js');
var ClientActions = require('./actions/client_actions.js');

var App = require('./components/app.jsx');
var CoverPage = require('./components/cover_index.jsx');
var ArtistIndex = require('./components/artist_index.jsx');


ClientActions.fetchCurrentUser();

var routes = (
  <Route path='/' component={App}>
  	<IndexRoute component={CoverPage} />
  	<Route path="artists/:artist" component={ArtistIndex} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
