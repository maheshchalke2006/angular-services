"use strict";
//app.mycomponent.ts
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
//Decoretor 
var core_1 = require("@angular/core");
var counter_service_1 = require("./counter.service");
var AppMyComponent = /** @class */ (function () {
    function AppMyComponent(contextService) {
        this.contextService = contextService;
        console.log('AppComponent Created');
    }
    AppMyComponent.prototype.DisplayData = function (data) {
        console.log('clicked' + data);
        //this.contextService.Shared_initialValue
    };
    AppMyComponent = __decorate([
        core_1.Component({
            selector: 'myapp',
            template: "\n                <mycounter [initialvalue]=\"v\" minimumvalue=0 maximumvalue=16\n                (counterchange)=\"DisplayData($event)\"\n                \n                >Loading</mycounter>\n                <p>\n                        Inital Value\n                        <input type=\"text\" [(ngModel)]=\"v\" />\n                        {{v}}\n                </p>\n\n                <counter-user></counter-user>                \n                \n        "
        }),
        __param(0, core_1.Inject(counter_service_1.CounterService))
    ], AppMyComponent);
    return AppMyComponent;
}());
exports.AppMyComponent = AppMyComponent;
