"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const env = require("env-var");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.environment = {
    mattermostUrl: env.get('MATTERMOST_BASE_URL').required().asString(),
    botToken: env.get('BOT_TOKEN').required().asString(),
    channelId: env.get('CHANNEL_ID').required().asString(),
};
//# sourceMappingURL=.environment.js.map