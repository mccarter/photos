//app.js is where you declare the fluxible instance, register stores to the app, set up fetchrPlugin for xhr requests, and link your root component to the app
'use strict'// strict mode changes some Javascript silent errors to throw errors.

//we can use the 'require' statement by using a npm module module called browserify and running,
    // 'browserify main.js -0 bundle.js' and dropping <script src='bundle.js'></script> inside our main html document
var React = require('react');//React Library
var Fluxible = require('fluxible');
var fetchrPlugin = require('fluxible-plugin-fetchr');
var routrPlugin = require('fluxible-plugin-routr');
var rootComponent = require('../components/index.jsx');

//Create new Fluxible app instance
var startupApp =  new Fluxible({
    component: rootComponent //Define root React component for Fluxible app instance
});

//Register stores with Fluxible app instance

//Install plugins
startupApp.plug(fetchrPlugin({
    xhrPath: '/api'// all client-side XHR requests will come through this endpoint
}));

startupApp.plug(routrPlugin( {routes: require('./routes/routes.js')} ));//sets up routes and router

module.exports = startupApp;


