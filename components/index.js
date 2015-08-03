'use strict'// strict mode changes some Javascript silent errors to throw errors.
var React = require('React');
var FluxibleMixin = require('fluxible').Mixin;

var Index = React.createClass({

  mixins: [ FluxibleMixin ],

  render: function() {
    return (
    <!DOCTYPE html>
    <html>
    <head>
        <title>KiteSurfing Photos</title>
    </head>
    <body>
      {/*This injuects the root application component*/}
      <div id="startup-app"> dangeroulsySetInnterHTML={{__html: this.props.markup}}</div>
      }
      {/*This exposes the dehydrated json state of all the stores as windo.App*/}
      <script dangeroulsySetInnterHTML={{__html: this.props.markup}}></script>

      {/*Browserify bundled javascripts*/}
      <script src="/v2/assets/bundle.js"></script>
    </body>
    </html>
    )
  };

});

module.exports = Index;

