"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//ngForm, ngSubmit, ngModel
var AppFormComponent = /** @class */ (function () {
    function AppFormComponent() {
    }
    AppFormComponent.prototype.SaveData = function (frm) {
        console.log('Form submited');
        console.log('value - ' + frm.value);
        console.log('dirty - ' + frm.dirty);
        console.log('touched - ' + frm.touched);
        console.log('pristine - ' + frm.pristine);
        console.log('valid - ' + frm.valid);
        console.log('invalid - ' + frm.invalid);
    };
    AppFormComponent = __decorate([
        core_1.Component({
            selector: 'myform',
            template: "\n        <h3>Simple Forms</h3>\n        <form (submit)=\"SaveData(reg)\" #reg=\"ngForm\">\n            <!-- Input type text -->\n\n                Input type text \n                <input type=\"text\" name=\"firstname\" ngModel \n                required \n                pattern='[a-z]*'\n                minlength=\"2\"\n                maxlength=\"6\"\n                #val_firstname=\"ngModel\"\n                />\n                <div *ngIf=\"val_firstname.errors\">    \n                    <span *ngIf=\"val_firstname.errors.required\">Please enter first name </span>\n                    <span *ngIf=\"val_firstname.errors.pattern\">Pattern </span>\n                    <span *ngIf=\"val_firstname.errors.minlength\">Minimum Length </span>\n                    <span *ngIf=\"val_firstname.errors.maxlength\">Maximum Length </span>\n                </div>\n\n            <p>\n                Gender<br />\n                Male <input type=\"radio\" name=\"gender\" value=\"Male\" ngModel />\n                No <input type=\"radio\" name=\"gender\" value=\"Female\" ngModel />\n            </p>\n            <p>\n                Language: \n                Marathi<input type=\"checkbox\" name=\"marathi\" ngModel />\n                English<input type=\"checkbox\" name=\"english\" ngModel />\n                Hindi<input type=\"checkbox\" name=\"hindi\" ngModel />\n            </p>                        \n            <p>\n                File\n                <input type=\"file\" name=\"photo\" ngModel />\n            </p>            \n\n            <input type=\"submit\" [disabled]=\"reg.invalid\">\n        </form>\n        {{reg.value|json}}\n        <p>dirty: {{reg.dirty}}</p>\n        <p>touched: {{reg.touched}}</p>\n        <p>pristine: {{reg.pristine}}</p>\n        <p>valid: {{reg.valid}}</p>\n        <p>invalid: {{reg.invalid}}</p>\n        <p>{{val_firstname.errors|json}}</p>\n    "
        })
    ], AppFormComponent);
    return AppFormComponent;
}());
exports.AppFormComponent = AppFormComponent;
