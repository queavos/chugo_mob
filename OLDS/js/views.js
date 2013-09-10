/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function showVenues(datos) {
    // alert("epp");
    salida = '';
    $.each(datos.resultado, function(i, dato) {

        salida = salida + "<li class='listaitem'>\n\
                <a href='#' data-href='venue/" + dato.id + "' class='link'> \n\
                    <h3 class='ui-li-heading'>" + dato.nombre + "</h3>\n\
                    <p class='ui-li-desc'><b>Direccion:</b>: " + dato.direccion + " </p>\n\
                    <p class = 'ui-li-desc'> <b> Localidad: </b> " + dato.ciudad + ", " + dato.pais + "</p >\n\
                </a>\n\
                </li>";
    });
    $('#venuelist').html(salida);
}
function showVenue(datos) {
}
function showCarte(datos) {
}
function showItem(datos) {
}
function showLogin(datos) {
}
function showLocate(datos) {
}
function showHome() {
    salida = "<h3>Bienvenido</h3>";
    salida = salida + "<a data-href='venues' href = '#' class = 'link' > Buscar </a>";
    return salida;

}
