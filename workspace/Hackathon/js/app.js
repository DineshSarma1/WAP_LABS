
"use strict"

class Product {
   
    #productId = null;
    #name = null;
    #quantityInStock = null;
    #unitPrice = null;

    // Getters
    getProductId = function() {
        return this.#productId;
    }

    getName = function() {
        return this.#name;
    }

    getQuantityInStock = function() {
        return this.#quantityInStock;
    }

    getUnitPrice = function() {
        return this.#unitPrice;
    }

    //setters

    setProductId = function(productId) {
        this._productId = productId;
    }

    setName = function(value) {
        this._name = value;
    }

    setQuantityInStock = function(value) {
        this._quantityInStock = value;
    }
    
    setUnitPrice = function(value) {
        this._unitPrice = value;
    }

    return {
        getProdId = getProductId
    }

})();

const prod1 = new Product();
prod1.setProductId(1001);
prod1.setName("Banana");
prod1.setQuantityInStock(12);
prod1.setUnitPrice(0.99);

const prod2 = new Product();
prod2.setProductId(1001);
prod2.setName("Banana");
prod2.setQuantityInStock(12);
prod2.setUnitPrice(0.99);

const prod3 = new Product();
prod3.setProductId(1001);
prod3.setName("Banana");
prod3.setQuantityInStock(12);
prod3.setUnitPrice(0.99);


console.log("first product name : " + prod1.getName);


Product.prototype.toString = function() {
    return `productId : ${this.getProductId()} name : ${this.getName()} quantityInStock : ${this.getQuantityInStock()} unitPrice: ${this.getUnitPrice()}`;
}

var products = [prod1,prod2,prod3];

for(let i = 0; i < products.length ; i++) {
    console.log(products[i].toString);
}