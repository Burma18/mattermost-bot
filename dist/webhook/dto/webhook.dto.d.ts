export declare class WebhookDto {
    token: string;
    team_id: string;
    team_domain: string;
    channel_id: string;
    channel_name: string;
    timestamp: number;
    user_id: string;
    user_name: string;
    post_id?: string;
    text: string;
    trigger_word?: string;
    file_ids?: string;
}
