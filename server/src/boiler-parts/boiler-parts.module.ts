import { Module } from '@nestjs/common';
import { BoilerPartsController } from './boiler-parts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoilerParts } from './boiler-parts.model';
import { BoilerPartsService } from './boiler-parts.service';

@Module({
  imports: [SequelizeModule.forFeature([BoilerParts])],
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService],
  exports: [BoilerPartsService],
})
export class BoilerPartsModule {}
