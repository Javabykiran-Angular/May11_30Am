"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, salary) {
        this.fname = f;
        this.lname = l;
        this.salary = salary;
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n        --------Employee Details------------\n        First Name:: " + this.fname + "\n        Last Name :: " + this.lname + "\n        Salary ::   " + this.salary + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
