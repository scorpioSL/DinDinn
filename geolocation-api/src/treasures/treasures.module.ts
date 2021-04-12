import { Module } from '@nestjs/common';
import { TreasuresService } from './treasures.service';
import { TreasuresController } from './treasures.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { treasures } from 'src/database/treasures';

@Module({
  providers: [TreasuresService],
  controllers: [TreasuresController],
  imports: [SequelizeModule.forFeature([treasures])],
})
export class TreasuresModule { }
