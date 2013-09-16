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
    this.sumtotal = 0;
    this.nextid = 0;
    this.date = new Date();
    this.addItem = function(litem, qnty)
    {
        var total = qnty * litem['price']
        this.nextid = this.nextid + 1;
        var item = new CartItem(this.nextid, litem['id'], litem['name'], qnty, litem['price'], total);
        this.items.push(item);
        this.touch();
    };
    this.delItem = function(id)
    {
        var length = this.items.length;
        for (i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id)
            {
                this.items[i].state = 0;
                this.items.splice(i, 1);
                console.log("Borrado..." + id);
            }
        }
        this.touch();
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
        return -1;

    };
    this.total = function() {
        var length = this.items.length;
        var total = 0;
        for (i = 0; i < length; i++) {
            if (this.items[i].state == 1)
            {
                total = total + this.items[i].total;
            }
        }
        return total;
    };
    this.touch = function() {
        this.date = new Date();
        this.sumtotal = this.total();
    };
}

function CartItem(id, itemid, name, qnty, price, total) {

    this.id = id;
    this.itemid = itemid;
    this.name = name;
    this.qnty = qnty;
    this.price = price;
    this.total = total;
    this.state = 1;
}
