import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class WebhookDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @IsNotEmpty()
  team_id: string;

  @IsString()
  @IsNotEmpty()
  team_domain: string;

  @IsString()
  @IsNotEmpty()
  channel_id: string;

  @IsString()
  @IsNotEmpty()
  channel_name: string;

  @IsNumber()
  @IsNotEmpty()
  timestamp: number;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsString()
  @IsOptional()
  post_id?: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsOptional()
  trigger_word?: string;

  @IsString()
  @IsOptional()
  file_ids?: string;
}
