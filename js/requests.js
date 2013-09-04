/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getVenues() {
    //var result = [];
    url = dir_remota + "test";
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            //showVenues(data);
            lista = data;
            console.log(lista);
            showVenues(lista);
            //return lista;
        }
    });
}
function getVenue(id) {
}
function getCarte(id) {
}
function getItem(id) {
}
