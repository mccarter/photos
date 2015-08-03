//client.js is where the rendering of the app to the DOM occurs
'use strict'// strict mode changes some Javascript silent errors to throw errors.
var React = require('react');
var startupApp = require('./app.js');
window.React = React; //puts React on the window object for Chrome DevTools support

var dehydratedState = window.App; //in index.js, the dehydrated state of the app is exposed on window.App

//we must rehydrate the app context to make it available for manipulation
startupApp.rehydrate(dehydratedState, function(err, context){//returns the de-serialized state of what was returned from the server
    if (err) {
        throw err;
    }

    window.context = context; //sets app context on the window object
    var mountNode = document.getElementById('startup-app');//grabs root level node for app defined in index.js (the root component)
    var rootComponent = startupApp.getComponent();//returns your root level React component, in this case index.js- allows you to access from server or client

    React.render(//renders the rootComponent at the mountNode. This functino compares the results with the existing server-rednered DOM.
                 //If everything matches, React will mount itself on top and attach client-side event handlers.
        rootComponent({context: context.getComponentContext()}),
        mountNode,
        function(){
            console.log('React client-side rendered.');
        }
    );
})
