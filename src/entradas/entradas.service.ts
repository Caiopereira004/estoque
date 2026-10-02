import { Injectable } from '@nestjs/common';
import { CreateEntradaDto } from './dto/create-entrada.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entradas } from './entities/entrada.entity.js';

@Injectable()
export class EntradasService {
  constructor(
    @InjectRepository(Entradas)
    private readonly entradasRepository: Repository <Entradas>
  ) {}

  create(createEntradaDto: CreateEntradaDto) {
    const novaEntrada = this.entradasRepository.create(createEntradaDto);
    return this.entradasRepository.save(novaEntrada);
  }

  findAll() {
    return this.entradasRepository.find();
  }

  findOne(id: number) {
    return this.entradasRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.entradasRepository.delete(id)
    return { deletado: true };
  }
}
