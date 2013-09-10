/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Views() {
    this.venues = "{{#result}}<li class='listaitem'><img class='ui-li-thumb iconlist' src='" + dir_remota + "images/locales/x48/{{imagen}}'><a href='#' data-venue='{{id }}' class='linktovenue'><h3 class='ui-li-heading'>{{nombre}} </h3><p class='ui-li-desc'><b>Direccion:</b>: {{direccion}} </p><p class = 'ui-li-desc'> <b> Localidad: </b> {{ciudad}}, {{pais}}</p ></a></li>{{/result}}";
    this.venue = '{{#result}}<h2>{{nombre}}</h2><br><img src="' + dir_remota + 'images/locales/x256/{{imagen}}" width="100%"><br><p><b>Direccíon</b> <br>{{direccion}}<br><b>Contacto</b><br>' +
            '<ul>{{#contacts}}{{>contacts}}{{/contacts}}</ul>' +
            '</p><a href="#" data-role="button" class="linktocarte" data-venue="{{id}}">Ver Carta</a>{{/result}}';
    this.venue_contacts = {contacts: "<li>{{tipo}}:{{value}}</li>"};
    this.carte = "<h2> Nuestra Carta <h2>" +
            "<ul data-role='listview' class ='cartelist' data-ajax='false'>{{#result}}\n\
                <li>{{type_name}}\n\
                        <ul data-role='listview' class ='cartelist' data-ajax='false'>\n\
                                {{#items}}\n\
                                        {{>items}}\n\
                                {{/items}}\n\
                        <ul>\n\
                </li>\n\
               {{/result}}</ul>";

    this.carte_item = {items: "<li class='listaitem'>\n\
                                    <img class='ui-li-thumb iconlist' src='" + dir_remota + "images/productos/x48/{{imagen}}'>\n\
                                    <a href='#' data-carte='{{id }}' class='itemlink'>\n\
                                            <h3 class='ui-li-heading'>{{name}} </h3>\n\
                                            <p class='ui-li-desc'>\n\
                                                        <b>Detalle:</b>: {{details}} \n\
                                            </p>\n\
                                            <p class = 'ui-li-desc'> \n\
                                                          <b> Precio: </b> \n\
                                                            <i><b>{{price}}</b></i>\n\
                                            </p>\n\
                                    </a>\n\
                               </li>"};
    this.items = "";
}

