import { Injectable } from '@nestjs/common';
import { CreateSaidaDto } from './dto/create-saida.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Saidas } from './entities/saida.entity.js';

@Injectable()
export class SaidasService {
  constructor(
    @InjectRepository(Saidas)
    private readonly saidasRepository: Repository <Saidas>
  ) {}

  create(createSaidaDto: CreateSaidaDto) {
    const novaSaida = this.saidasRepository.create(createSaidaDto);
    return this.saidasRepository.save(novaSaida);
  }

  findAll() {
    return this.saidasRepository.find();
  }

  findOne(id: number) {
    return this.saidasRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.saidasRepository.delete(id)
    return { deletado: true};
  }
}
