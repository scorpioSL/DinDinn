import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { money_values } from 'src/database/money_values';
import { treasures } from 'src/database/treasures';
import { user } from 'src/database/user';
import { MockController } from './mock.controller';
import { MockService } from './mock.service';

@Module({
  controllers: [MockController],
  imports:[SequelizeModule.forFeature([treasures,user,money_values])],
  providers: [MockService]
})
export class MockModule {}
