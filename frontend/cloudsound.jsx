var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Login />,
    document.getElementById('root')
  );
});
