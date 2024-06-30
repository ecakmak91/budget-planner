import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetPlannerModule } from './budget-planner/budget-planner.module';
import { BudgetPlannerController } from './budget-planner/budget-planner.controller';
import { BudgetPlannerService } from './budget-planner/budget-planner.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';

@Module({
  imports: [
    BudgetPlannerModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>('database.username')}:${configService.get<number>('database.password')}@${configService.get<string>('database.host')}/budget_planner?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, BudgetPlannerController],
  providers: [AppService, BudgetPlannerService],
})
export class AppModule {}
