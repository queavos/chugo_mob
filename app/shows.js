/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function showHome() {
    //$.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#venues", {transition: "none"});
    salida = "<h3>Bienvenido</h3>";
    salida = salida + "<a data-href='venues' href = '#' class = 'linktovenues' data-role='button' > Buscar </a>";
    $('#homecontent').html(salida);
    $.mobile.loading('hide');
    initBinding();
}
function showVenues(datos) {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#venues", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.venues, datos);
    $('#venuescontent').html(datos.count + ' Encontrados...');
    $('#venuelist').html(salida);
    $('#venuelist').listview('refresh', 'splitIcon');
    initBinding();
}

function showVenue(datos) {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#venue", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.venue, datos, views.venue_contacts);
    //alert(salida);
    $('#contentvenue').html(salida);
    initBinding();
}

function showCarte(datos) {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#carte", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.carte, datos, views.carte_item);
    //alert(salida);
    console.log(salida);
    $('#contentcarte').html(salida);
    initBinding();
    $('.cartelist').listview();

}
function showItems(datos) {
}

