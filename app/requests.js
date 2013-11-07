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
    locact = id;
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            locact_name = data.result[0].nombre;
            //alert(locact_name);
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
    url = dir_remota + "api/v1/item/" + id;
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            last_item = data['result'][0];
            showItem(data);
        }
    });
}
function postPedido() {
    var datos = JSON.stringify(pedido);
    url = dir_remota + "api/v1/order";
    var lista = [];
    $.ajax({
        type: "POST",
        data: JSON.stringify(pedido),
        url: url,
        crossdomain: true,
        success: function(data) {
            //last_item = data['result'][0];
            //showItem(data);
        }
    });
}
function postRegister() {
    var datos = JSON.stringify(pedido);
    url = dir_remota + "api/v1/register";
    var lista = [];
    $.ajax({
        type: "POST",
        data: JSON.stringify(newuser),
        url: url,
        crossdomain: true,
        complete: function(jqXHR, textStatus) {
            showValMobile();
        }
    });
}
function getValMobile() {
    url = dir_remota + "api/v1/validate/" + newuser.mobile + "/" + $('#codeval').val();
    var lista = [];
    $.ajax({
        async: false,
        data: "",
        url: url,
        crossdomain: true,
        complete: function(data) {
            //alert(textStatus);
            getUser();
        }
    }
    );
}
function getUser() {

    url = dir_remota + "api/v1/user/" + curruser.username;
    var lista = [];
    $.ajax({
        async: false,
        dataType: "jsonp",
        data: "",
        url: url,
        crossdomain: true,
        success: function(data) {
            curruser.id = data.result[0].id;
            curruser.username = data.result[0].username;
            curruser.mobile = data.result[0].mobile;
            showHome();
        }
    });
}
