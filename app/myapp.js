/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Venue = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        location: 'photourl',
        id: 1
    }
});

var VenueCollection = Backbone.Collection.extend({
    model: Venue,
    url: "http://localhost/chugo.dev/public/index.php/api/v1/venues"
});
var venues = new VenueCollection;

var AppRouter = Backbone.Router.extend({
    routes: {
        "": "showNew",
        "new": "showNew",
        "top": "showTop",
        "random": "showRandom"
    },
    showNew: function() {
        venues.fetch();
    },
    showTop: function() {
        venues.fetch({data: {sortby: "top"}});
    },
    showRandom: function() {
        venues.fetch({data: {sortby: "random"}});
    }
});

