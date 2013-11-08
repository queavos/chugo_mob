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
    $(".boton").button();
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
        currentId = $(this).attr('data-item');
        getItem(currentId);
        event.preventDefault();
    });
    $(".linktocart").click(function(event) {
        //currentId = $(this).attr('data-item');
        //getItem(currentId);
        showCart();
        event.preventDefault();
    });
    $(".additem").click(function(event) {
        //currentId = $(this).attr('data-item');
        //getItem(currentId);
        showAddItem();
        event.preventDefault();
    });

    $(".delitemcart").click(function(event) {
        currentId = $(this).attr('data-itemid');
        //getItem(currentId);
        //showAddItem();
        event.preventDefault();
        var diag = confirm("El producto se eliminara de su pedido. ¿Desea continuar?");
        if (diag == true)
        {
            pedido.delItem(currentId);
            showCart();
        }

    });
    $(".addConfirm").click(function(event) {
        //currentId = $(this).attr('data-item');
        //getItem(currentId);
        //showAddItem();
        var qnty = $("#txtqnty").val();
        event.preventDefault();
        if (!isNaN(qnty))
        {
            qnty = Math.abs(qnty);

            if ((pedido.venue != 0) && (pedido.venue != last_item['venue_id']))
            {
                var diag = confirm("El Local de su pedido actual, " +
                        " no se corresponde con el del nuevo producto que desea agregar." +
                        " ¿Desea eliminar el pedido actual e iniciar uno que corresponda al Local   Del Nuevo Producto?");
                if (diag == true)
                {
                    pedido = new Cart;

                }
                else
                {
                    alert("El producto NO fue agregado");
                    window.history.back();
                    return;
                }

            }
            if (pedido.venue == 0)
            {
                pedido.lat = lat;
                pedido.lng = lng;
                pedido.venue = last_item['venue_id'];
                pedido.shipping = locenvio;
                pedido.venue_name = locact_name;
                pedido.userid = curruser.id;
            }
            //alert("llego a check");
            var check = pedido.findItem(last_item['id'])
            console.log("check=" + check);
            if (check != -1) {
                var diag = confirm("Este producto suplantara a un producto igual ya existente, " +
                        " ¿Desea continuar?");
                if (diag == true)
                {
                    //pedido = new Cart;
                    pedido.delItem(check);
                }
                else
                {
                    alert("El producto NO fue agregado");
                    window.history.back();
                    return;
                }
            }

            pedido.addItem(last_item, qnty);
            alert("El producto fue agregado\n\
el monto total de su Compra es " + pedido.sumtotal);
            window.history.back();
            console.log(pedido);
        }
    });
    $(".sendorder").click(function(event) {

        //postPedido();
        //$.mobile.changePage("#sendcart", {transition: "none"});
        showSendCart();
        event.preventDefault();
    });

    $(".confsend").click(function(event) {

        pedido.address = $("#dirconf").val();
        postPedido();
        //$.mobile.changePage("#cartsended", {transition: "none"});
        showSendedCart();
        event.preventDefault();
    });

    $(".registerbtn").click(function(event) {

        newuser.email = $("#email").val();
        newuser.username = $("#username").val();
        newuser.password = $("#password").val();
        newuser.password_confirmation = $("#password_confimation").val();
        newuser.mobile = $("#mobile").val();
        curruser.username = newuser.username;
        //postPedido();
        postRegister();
        //showSendedCart();
        event.preventDefault();
    });
    $(".valmobbtn").click(function(event) {

        //postPedido();
        //$.mobile.changePage("#sendcart", {transition: "none"});
        //showSendCart();
        getValMobile();
        getUser();
        event.preventDefault();
    });
    $(".loginbtn").click(function(event) {

        //postPedido();
        //$.mobile.changePage("#sendcart", {transition: "none"});
        //showSendCart();
        //getValMobile();
        //getUser();
        login.username = $('#usernamelog').val();
        login.password = $('#passwordlog').val();
        curruser.username = login.username;
        postLogin();
        getUser();
        //getAuth();
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