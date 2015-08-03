'use strict'// strict mode changes some Javascript silent errors to throw errors.
var loadHomePage = require('../actions/load-home-page.js');
module.exports = {

    home: {
        path: '/',
        method: 'get',
        //this action is used when the route is matched
        action: loadHomePage
    }


};
