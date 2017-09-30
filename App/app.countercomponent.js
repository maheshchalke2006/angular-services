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
var AppCounterComponent = /** @class */ (function () {
    function AppCounterComponent(contextService) {
        this.contextService = contextService;
        this.value = 0;
        this.minvalue = 0;
        //@Input('maximumvalue') // You can use alternet method to decorate in component
        this.maxvalue = 0;
        this.changeValue = new core_1.EventEmitter();
        console.log('AppComponent Created from counter component');
    }
    AppCounterComponent.prototype.SetValue = function () {
        console.log('@@@@@');
        this.contextService.Shared_initialValue = 199;
        //console.log(this.contextService.Shared_initialValue);
        this.contextService.SetValue(this.value);
    };
    AppCounterComponent.prototype.Add = function () {
        this.value++;
        this.changeValue.emit("Counter value is " + this.value);
    };
    __decorate([
        core_1.Input('initialvalue') // As per guidelines use all small letters for variable names.
    ], AppCounterComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input('minimumvalue')
    ], AppCounterComponent.prototype, "minvalue", void 0);
    __decorate([
        core_1.Output('counterchange')
    ], AppCounterComponent.prototype, "changeValue", void 0);
    AppCounterComponent = __decorate([
        core_1.Component({
            selector: 'mycounter',
            template: "\n        <h3> My Counter </h3>\n        <input type=\"text\" [(ngModel)] =\"value\"  (keypress)=\"SetValue()\" />\n        <button (click)=\"Add()\" [disabled] = \"value>=maxvalue\">Click</button>\n        Value {{value}} Minimum Value {{minvalue}} Maxvalue{{maxvalue}}\n\n        <button (click)=\"SetValue()\">Set value</button>\n    ",
            inputs: ['maxvalue:maximumvalue'],
        }),
        __param(0, core_1.Inject(counter_service_1.CounterService))
    ], AppCounterComponent);
    return AppCounterComponent;
}());
exports.AppCounterComponent = AppCounterComponent;
