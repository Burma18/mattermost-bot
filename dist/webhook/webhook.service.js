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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookService = void 0;
const _environment_1 = require("./../.environment");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let WebhookService = class WebhookService {
    constructor() {
        this.mattermostBaseUrl = _environment_1.environment.mattermostUrl;
        this.token = _environment_1.environment.botToken;
        this.channelId = _environment_1.environment.channelId;
    }
    async handleWebhook(body) {
        const { text, user_name, file_ids } = body;
        const formattedMessage = `
**🚨 Проблема:** ${text}
**🧑‍💻 Отправитель:** ${user_name || 'Неизвестный'}
**⏰ Время:** ${new Date().toLocaleString() || 'Не указано'}
    `;
        const attachments = file_ids
            ? this.createAttachmentsFromFileIds(file_ids)
            : [];
        await axios_1.default.post(`${this.mattermostBaseUrl}/posts`, {
            channel_id: this.channelId,
            message: `⚠️ **Баг обнаружен:**\n${formattedMessage}`,
            props: {
                attachments: attachments,
            },
        }, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
        });
    }
    createAttachmentsFromFileIds(file_ids) {
        const fileIdsArray = file_ids.split(',');
        return fileIdsArray.map((fileId) => ({
            pretext: 'Прикрепленный файл',
            title: 'Файл',
            title_link: `${this.mattermostBaseUrl}/files/${fileId}`,
        }));
    }
};
exports.WebhookService = WebhookService;
exports.WebhookService = WebhookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], WebhookService);
//# sourceMappingURL=webhook.service.js.map