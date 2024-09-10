"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const webhook_controller_1 = require("./webhook/webhook.controller");
const webhook_service_1 = require("./webhook/webhook.service");
const webhook_module_1 = require("./webhook/webhook.module");
const ping_controller_1 = require("./ping/ping.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [webhook_module_1.WebhookModule],
        controllers: [webhook_controller_1.WebhookController, ping_controller_1.PingController],
        providers: [webhook_service_1.WebhookService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map