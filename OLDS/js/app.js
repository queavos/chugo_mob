/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function actionStart()
{
    actionHome();
    events();
}

function actionVenues() {
    salida = getVenues();
    events();
    $.mobile.changePage("#venues", {transition: "none"});

}
function actionVenue(datos) {
    alert('aca llego');
}
function actionCarte(datos) {
}
function actionItem(datos) {
}
function actionLogin(datos) {
}
function actionLocate(datos) {
}
function actionHome() {
    salida = showHome();
    $('#homeContent').html(salida);
    events();
    $.mobile.changePage("#home", {transition: "none"});
    //$('ul').listview('refresh');
}
function events()
{
    $('.link').click(function(e)
    {
        var link = $(this).attr('data-href');
        e.preventDefault();
        route(link);
    });
    $('#ulvenues').listview();
    $('#ulvenues').listview('refresh');
}