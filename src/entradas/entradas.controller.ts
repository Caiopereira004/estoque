import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntradasService } from './entradas.service.js';
import { CreateEntradaDto } from './dto/create-entrada.dto.js';
import { UpdateEntradaDto } from './dto/update-entrada.dto.js';

@Controller('entradas')
export class EntradasController {
  constructor(private readonly entradasService: EntradasService) {}

  @Post()
  create(@Body() createEntradaDto: CreateEntradaDto) {
    return this.entradasService.create(createEntradaDto);
  }

  @Get()
  findAll() {
    return this.entradasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entradasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entradasService.remove(+id);
  }
}
