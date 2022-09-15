//syntax
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
var BaseEmployee = /** @class */ (function () {
    function BaseEmployee() {
    }
    BaseEmployee.prototype.workStarted = function () {
        console.log('work started.');
    };
    return BaseEmployee;
}());
//constructor
var BbaseEmployee = /** @class */ (function () {
    function BbaseEmployee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return BbaseEmployee;
}());
//Derived class
var BaaaseEmployee = /** @class */ (function () {
    function BaaaseEmployee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return BaaaseEmployee;
}());
var Emmployee = /** @class */ (function (_super) {
    __extends(Emmployee, _super);
    function Emmployee(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    Emmployee.prototype.doWork = function () {
        console.log("".concat(this.lastName, ", ").concat(this.firstName, " doing work..."));
    };
    return Emmployee;
}(BaaaseEmployee));
var emp = new Emmployee('Dana', 'Ryan');
emp.doWork();
