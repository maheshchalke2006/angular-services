"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_mycomponent_1 = require("./app.mycomponent");
var app_formcomponent_1 = require("./app.formcomponent");
var app_modelformcomponent_1 = require("./app.modelformcomponent");
var app_reactiveformcomponent_1 = require("./app.reactiveformcomponent");
var app_countercomponent_1 = require("./app.countercomponent");
var app_counterusercomponent_1 = require("./app.counterusercomponent");
var counter_service_1 = require("./counter.service");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var MyModule = /** @class */ (function () {
    function MyModule() {
    }
    MyModule = __decorate([
        core_1.NgModule({
            providers: [counter_service_1.CounterService],
            declarations: [app_mycomponent_1.AppMyComponent,
                app_formcomponent_1.AppFormComponent,
                app_modelformcomponent_1.AppModelFormComponent,
                app_reactiveformcomponent_1.AppReactiveFormComponent,
                app_countercomponent_1.AppCounterComponent,
                app_counterusercomponent_1.AppCounterUserComponent
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule],
            bootstrap: [app_mycomponent_1.AppMyComponent]
        })
    ], MyModule);
    return MyModule;
}());
exports.MyModule = MyModule;
