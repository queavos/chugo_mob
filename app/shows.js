/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function showHome() {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#index", {transition: "none"});
    salida = "<h3>Bienvenido</h3>";
    salida = salida + "<a data-href='venues' href = '#' class = 'linktovenues' data-role='button' > Buscar </a> ";
    //console.log(salida);
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
    $.mobile.loading('hide');
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
    $.mobile.loading('hide');
    initBinding();
    $('.linktocarte').button();
}

function showCarte(datos) {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#carte", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.carte, datos, views.carte_item);
    //alert(salida);
    // console.log(salida);
    $('#contentcarte').html(salida);
    initBinding();
    $('.cartelist').listview();
    $.mobile.loading('hide');
}
function showItem(datos) {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#item", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.items, datos);
    //console.log(salida);
    $('#contentitem').html(salida);
    initBinding();
    //$('.cartelist').listview();
    $.mobile.loading('hide');
}
function showAddItem() {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#addcart", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.additem, last_item);
    //console.log(last_item);
    $('#contentaddcart').html(salida);
    initBinding();
    $("#txtqnty").val(1);
    $.mobile.loading('hide');
}
function showCart() {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#cart", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.cart, pedido, views.cart_item);
    $('#contentcart').html(salida);
    initBinding();
    $.mobile.loading('hide');
}
function showSendCart() {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#sendcart", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.cartconf, pedido, views.cartconf_item);
    $('#contentconf').html(salida);
    initBinding();
    $.mobile.loading('hide');
}
function showSendedCart() {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#cartsended", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.cartsended, pedido);
    $('#contentsended').html(salida);
    initBinding();
    $.mobile.loading('hide');
}
function showValMobile() {
    $.mobile.loading('show', {theme: 'a'});
    $.mobile.changePage("#valmobile", {transition: "none"});
    salida = '';
    views = new Views();
    salida = Mustache.to_html(views.valmobile, newuser);
    $('#validmsgtext').html(salida);
    initBinding();
    $.mobile.loading('hide');
}

