import { ITelegramOptions } from 'src/telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_TOKEN');
	if (!token) {
		throw new Error('TELEGRAM_TOKEN не задан');
	}
	const chatId = configService.get('TELEGRAM_CHAT_ID') ?? '';
	if (!chatId) {
		throw new Error('TELEGRAM_CHAT_ID не задан');
	}
	return {
		token: token,
		chatId: chatId,
	};
};
