var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx');
var Login = require('./components/login.jsx');
// var CoverIndex = require('./components/cover_index.jsx');

// var routes = (
//   <Route path='/' component={App}>
//     <IndexRoute component={CoverIndex}/>
//     <Route path='main' component={CoverIndex} />
//   </Route>
// );

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
