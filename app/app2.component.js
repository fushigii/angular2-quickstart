"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var App2Component = (function () {
    function App2Component() {
    }
    App2Component = __decorate([
        core_1.Component({
            selector: 'hellow-app',
            template: "<div class=\"jumbotron\">\n  <h1>Bootstrap Tutorial</h1>\n  <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,\n  mobile-first projects on the web.</p>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], App2Component);
    return App2Component;
}());
exports.App2Component = App2Component;
//# sourceMappingURL=app2.component.js.map