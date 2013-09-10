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




}


