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
    datos = getVenues();
    showVenues(datos);
    events();
    $.mobile.changePage("#venues", {transition: "none"});

}
function actionVenue(datos) {
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
}
function events()
{
    $('a').click(function(e)
    {
        var link = $(this).attr('href');
        e.preventDefault();
        route(link);
    });
}