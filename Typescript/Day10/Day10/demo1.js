"use strict";
exports.__esModule = true;
exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(f, l, id) {
        this.fname = f;
        this.lname = l;
        this.id = id;
    }
    Myclass.prototype.display = function () {
        // let fname="Kiran";
        console.log("\n            ----------Details------\n            First Name :: " + this.fname + "\n            last name  :: " + this.lname + "\n            Id         :: " + this.id + "\n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// var obj=new Myclass("Sumit","Raokhande",9);
// obj.display();
