var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, paymentPerHour) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    return Employee;
}());
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, paymentPerHour, workingHours) {
        var _this = _super.call(this, name, paymentPerHour) || this;
        _this.workingHours = workingHours;
        return _this;
    }
    Contractor.prototype.calculateSalary = function () {
        return this.paymentPerHour * this.workingHours;
    };
    return Contractor;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, paymentPerHour) {
        return _super.call(this, name, paymentPerHour) || this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.paymentPerHour * 8;
    };
    return FullTimeEmployee;
}(Employee));
var contractor;
var fullTimeEmployee;
contractor = new Contractor('Ramesh contractor', 10, 5);
fullTimeEmployee = new FullTimeEmployee('Ramesh full time employee', 8);
console.log(contractor.calculateSalary());
console.log(fullTimeEmployee.calculateSalary());
