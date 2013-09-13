/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 
 function venuelink(e) {
 $.mobile.loading('show', {theme: 'a'});
 $.mobile.changePage("#datos", {transition: "none"});
 var evt = e || window.event;
 currentId = $(this).attr('data-venue');
 alert(currentId);
 traer_abonado(currentId);
 $.mobile.loading('hide');
 evt.preventDefault();
 
 }*/
function initBinding() {
    /*  Link to Venue    */
    $(".linktovenues").click(function(event) {
        getVenues();
        event.preventDefault();
    });
    $(".linktovenue").click(function(event) {
        currentId = $(this).attr('data-venue');
        getVenue(currentId);
        event.preventDefault();
    });

    $(".linktocarte").click(function(event) {
        currentId = $(this).attr('data-venue');
        getCarte(currentId);
        event.preventDefault();
    });
    $(".linktoitem").click(function(event) {
        getVenues();
        event.preventDefault();
    });

    /*  Link to Carte    */

    /*  Link to Item of Carte    */
    $('#ubicar').on("pageshow", function() {

        $('#map_canvas').gmap('refresh');
    });
    $('#ubicar').on("pageinit", function() {
        mapa = $('#map_canvas');
        var pos = new google.maps.LatLng(lat, lng);
        mapa.gmap({'center': pos, 'zoom': 15, 'disableDefaultUI': true, });
        mapa.gmap('addMarker', {'tags': 'foo', 'position': pos})
        //console.log(mapa);

    });




}
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(initPosition);
    }
    else {
        //x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function initPosition(position)
{
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}
function watchLocation() {

    if (navigator.geolocation)
    {
        navigator.geolocation.watchPosition(updatePosition);
    }
    else {
        //x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function updatePosition(position)
{
    lat = position.coords.latitude;
    lng = position.coords.longitude;

}