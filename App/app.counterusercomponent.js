"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var counter_service_1 = require("./counter.service");
var AppCounterUserComponent = /** @class */ (function () {
    function AppCounterUserComponent(contextService) {
        this.contextService = contextService;
        console.log('AppComponent Created');
    }
    AppCounterUserComponent.prototype.GetValue = function () {
        console.log(this.contextService.Shared_initialValue);
    };
    AppCounterUserComponent = __decorate([
        core_1.Component({
            //providers:[CounterService], // This will restrict service to be call 
            selector: 'counter-user',
            template: "\n        <b>Counter user</b>\n         <p>\n                Inital Value\n                <input type=\"text\" [(ngModel)]=\"v\" />\n                {{v}}\n        </p>\n\n        <button (click)=\"GetValue()\">Get value</button>\n    "
        }),
        __param(0, core_1.Inject(counter_service_1.CounterService))
    ], AppCounterUserComponent);
    return AppCounterUserComponent;
}());
exports.AppCounterUserComponent = AppCounterUserComponent;
