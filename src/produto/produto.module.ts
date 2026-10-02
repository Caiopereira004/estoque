import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service.js';
import { ProdutoController } from './produto.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity.js';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
  imports: [TypeOrmModule.forFeature([Produto])],
})
export class ProdutoModule {}
