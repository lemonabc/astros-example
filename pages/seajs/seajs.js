define(function(require) {
    var Backbone = require('backbone');
    var app = require('app/views/app');
    var Workspace = require('app/routers/router');
    new Workspace();
    Backbone.history.start();
    new app();
});