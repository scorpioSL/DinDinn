import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { money_values } from './database/money_values';
import { treasures } from './database/treasures';
import { user } from './database/user';
import { MockModule } from './mock/mock.module';
import { TreasuresModule } from './treasures/treasures.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      synchronize: true,
      autoLoadModels: true,
      dialect: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [treasures, money_values, user],
    }),
    MockModule,
    TreasuresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
