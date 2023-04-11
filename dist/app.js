"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ControllerDecoration(config) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...arg) {
                super(...arg);
                this.parent = document.getElementById(config.parent);
                this.element = document.createElement(config.template);
                this.element.innerHTML = this.content;
                this.parent.appendChild(this.element);
            }
        };
    };
}
let Controller = class Controller {
    constructor() {
        this.content = "My custom controller";
    }
};
Controller = __decorate([
    ControllerDecoration({
        parent: "app",
        template: "H1",
    })
], Controller);
const controller = new Controller();
//# sourceMappingURL=app.js.map