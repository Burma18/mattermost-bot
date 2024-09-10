import { Module } from '@nestjs/common';
import { WebhookController } from './webhook/webhook.controller';
import { WebhookService } from './webhook/webhook.service';
import { WebhookModule } from './webhook/webhook.module';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [WebhookModule],
  controllers: [WebhookController, PingController],
  providers: [WebhookService],
})
export class AppModule {}
