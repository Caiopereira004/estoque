import { PartialType } from '@nestjs/mapped-types';
import { CreateEntradaDto } from './create-entrada.dto.js';

export class UpdateEntradaDto extends PartialType(CreateEntradaDto) {}
