import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';
import { EntradasModule } from './entradas/entradas.module.js';
import { SaidasModule } from './saidas/saidas.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entities/produto.entity.js';
import { Entradas } from './entradas/entities/entrada.entity.js';
import { Saidas } from './saidas/entities/saida.entity.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_estoque',
      entities: [Produto, Entradas, Saidas],
      synchronize: true,
    }),
    ProdutoModule,
    EntradasModule,
    SaidasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
