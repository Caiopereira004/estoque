import { Module } from '@nestjs/common';
import { SaidasService } from './saidas.service.js';
import { SaidasController } from './saidas.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saidas } from './entities/saida.entity.js';

@Module({
  controllers: [SaidasController],
  providers: [SaidasService],
  imports: [TypeOrmModule.forFeature([Saidas])]
})
export class SaidasModule {}
