export declare class WebhookService {
    private readonly mattermostBaseUrl;
    private readonly token;
    private readonly channelId;
    constructor();
    handleWebhook(body: any): Promise<void>;
    private createAttachmentsFromFileIds;
}
