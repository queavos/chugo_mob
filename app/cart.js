/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function cart()
{
    this.venue = 0;
    this.lat = 0;
    this.lng = 0;
    this.address = "";
    this.sended = 0;
    this.userid = 0;
    this.items = [];
    this.date = new Date();

    this.total = function() {
    };
    this.touch = function() {
        this.date = new Date();
    };
}

function cart_item(id, name, qnty, price, total) {
    this.id = id;
    this.name = name;
    this.qnty = qnty;
    this.price = price;
    this.total = total;
}
