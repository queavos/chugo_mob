/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function route(link)
{
    //enlace = link.split('#');
    str = link.split('/');
    //alert(str[0]);
    switch (str[0]) {
        case 'Home':
            actionHome();
            break;
        case 'venues':
            //
            actionVenues();
            break;
        case 'venue':
            actionVenue(str[1]);
            break;
        case 'carte':
            actionCarte(id);
            break;
        case 'login':
            actionLogin(id);
            break;
        case 'locate':
            actionLocate(id);
            break;
        default:
            actionHome();
    }
}


