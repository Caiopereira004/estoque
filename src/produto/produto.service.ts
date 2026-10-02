import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository <Produto>
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    const novoProduto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(novoProduto);
  }

  findAll() {
    return this.produtoRepository.find();
  }

  findOne(id: number) {
    return this.produtoRepository.findOneBy({ id });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    await this.produtoRepository.update(id, updateProdutoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.produtoRepository.delete(id);
    return { deletado: true };
  }
}
