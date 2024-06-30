import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as TelegramBot from 'node-telegram-bot-api';
import { ConfigService } from '@nestjs/config';
import { BudgetPlannerController } from './budget-planner/budget-planner.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const token = configService.get<string>('telegram.token');
  // console.log('token:', token);
  const bot = new TelegramBot(token, {
    polling: true,
  });

  bot.on('message', async (msg) => {
    const budgetPlannerController = app.get(BudgetPlannerController);
    const message: string = await budgetPlannerController.setMessage(msg);
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, message);
  });
}
bootstrap();
