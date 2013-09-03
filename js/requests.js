/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getVenues() {
    url = dir_remota + "test";
    $.ajax({
        dataType: "jsonp",
        data: "",
        url: url,
        success: function(data) {
            return data;
        }
    });

}
function getVenue(id) {
}
function getCarte(id) {
}
function getItem(id) {
}
