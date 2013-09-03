/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function route(link)
{
    str = link.split('/');
    //alert(str);
    switch (str[0]) {
        case '#Home':
            actionHome();
            break;
        case '#venues':
            actionVenues();
            break;
        case '#venue':
            actionVenue(id);
            break;
        case '#carte':
            actionCarte(id);
            break;
        case '#login':
            actionLogin(id);
            break;
        case '#locate':
            actionLocate(id);
            break;
        default:
            actionHome();
    }
}


