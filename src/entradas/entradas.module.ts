import { Module } from '@nestjs/common';
import { EntradasService } from './entradas.service.js';
import { EntradasController } from './entradas.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entradas } from './entities/entrada.entity.js';

@Module({
  controllers: [EntradasController],
  providers: [EntradasService],
  imports: [TypeOrmModule.forFeature([Entradas])],
})
export class EntradasModule {}
