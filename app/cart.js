/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Cart()
{
    this.venue = 0;
    this.lat = 0;
    this.lng = 0;
    this.address = "";
    this.sended = 0;
    this.userid = 0;
    this.items = [];
    this.date = new Date();
    this.addItem = function(litem, qnty)
    {
        var total = qnty * litem['price']
        var item = new CartItem(litem['id'], litem['name'], qnty, litem['price'], total);
        this.items.push(item);
        this.touch();
    };
    this.delItem = function(id)
    {
        var length = this.items.length;
        for (i = 0; i < length; i++) {
            if (this.items[i].id = id)
            {
                this.items[i].state = 0;
            }
        }
    };
    this.findItem = function(itemid)
    {
        var length = this.items.length;
        for (i = 0; i < length; i++)
        {
            if ((this.items[i].itemid == itemid) && ((this.items[i].state == 1))) {
                return this.items[i].id;
            }
        }
        return 0;

    };
    this.total = function() {
    };
    this.touch = function() {
        this.date = new Date();
    };
}

function CartItem(id, name, qnty, price, total) {
    this.id = pedido.items.length;
    this.itemid = id;
    this.name = name;
    this.qnty = qnty;
    this.price = price;
    this.total = total;
    this.state = 1;
}
