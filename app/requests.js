/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getVenues() {
    //var result = [];
    url = dir_remota + "api/v1/venues";
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            lista = data;
            showVenues(lista);
        }
    });
}
function getVenue(id) {

    url = dir_remota + "api/v1/venue/" + id;
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            showVenue(data);
        }
    });
}
function getCarte(id) {
    url = dir_remota + "api/v1/venue/" + id + "/carte";
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            showCarte(data);
        }
    });
}
function getItem(id) {
}
