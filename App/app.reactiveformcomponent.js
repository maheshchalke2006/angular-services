"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppReactiveFormComponent = /** @class */ (function () {
    function AppReactiveFormComponent() {
        this.reg = new forms_1.FormGroup({
            firstname: new forms_1.FormControl('test', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(2)
            ])),
            lastname: new forms_1.FormControl(),
        });
    }
    AppReactiveFormComponent.prototype.SaveData = function () {
        this.reg.controls['firstname'].setValue('new value');
        this.reg.controls['lastname'].setValue('new value');
        this.reg.setValue({ 'firstname': 'test1233', 'lastname': 'test123' });
    };
    AppReactiveFormComponent = __decorate([
        core_1.Component({
            selector: 'myreactiveform',
            template: "\n            <h3> My Reactive Form </h3>\n            <form (submit)=\"SaveData()\" [formGroup]=\"reg\" >\n                <p>\n                    <input type=\"text\" \n                    [formControl]=\"reg.controls['firstname']\" />\n                </p>\n                <p>\n                    <input type=\"text\" \n                    [formControl]=\"reg.controls['lastname']\" />\n                </p>                \n                <p>\n                    <input type=\"submit\">\n                    Show data <input type=\"button\" (click)=\"SaveData()\" value=\"Show Data\">\n                </p>\n            </form>\n            Errors {{reg.controls['firstname'].errors|json}}\n    "
        })
    ], AppReactiveFormComponent);
    return AppReactiveFormComponent;
}());
exports.AppReactiveFormComponent = AppReactiveFormComponent;
