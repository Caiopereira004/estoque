import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaidasService } from './saidas.service.js';
import { CreateSaidaDto } from './dto/create-saida.dto.js';
import { UpdateSaidaDto } from './dto/update-saida.dto.js';

@Controller('saidas')
export class SaidasController {
  constructor(private readonly saidasService: SaidasService) {}

  @Post()
  create(@Body() createSaidaDto: CreateSaidaDto) {
    return this.saidasService.create(createSaidaDto);
  }

  @Get()
  findAll() {
    return this.saidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saidasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saidasService.remove(+id);
  }
}
