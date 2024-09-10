import * as env from 'env-var';
import { config } from 'dotenv';

config();

export const environment = {
  mattermostUrl: env.get('MATTERMOST_BASE_URL').required().asString(),
  botToken: env.get('BOT_TOKEN').required().asString(),
  channelId: env.get('CHANNEL_ID').required().asString(),
};
