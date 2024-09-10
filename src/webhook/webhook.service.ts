import { environment } from './../.environment';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WebhookService {
  private readonly mattermostBaseUrl = environment.mattermostUrl;
  private readonly token = environment.botToken;
  private readonly channelId = environment.channelId;

  constructor() {}

  async handleWebhook(body: any): Promise<void> {
    const { text, user_name, file_ids } = body;

    const formattedMessage = `
**🚨 Проблема:** ${text}
**🧑‍💻 Отправитель:** ${user_name || 'Неизвестный'}
**⏰ Время:** ${new Date().toLocaleString() || 'Не указано'}
    `;

    const attachments = file_ids
      ? this.createAttachmentsFromFileIds(file_ids)
      : [];

    console.log(this.mattermostBaseUrl);
    await axios.post(
      `${this.mattermostBaseUrl}/api/v4/posts`,
      {
        channel_id: this.channelId,
        message: `⚠️ **Баг обнаружен:**\n${formattedMessage}`,
        props: {
          attachments: attachments,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      },
    );
  }

  private createAttachmentsFromFileIds(file_ids: string): any[] {
    const fileIdsArray = file_ids.split(',');

    return fileIdsArray.map((fileId) => ({
      pretext: 'Прикрепленный файл',
      title: 'Файл',
      title_link: `${this.mattermostBaseUrl}/api/v4/files/${fileId}`,
    }));
  }
}
