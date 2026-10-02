import { PartialType } from '@nestjs/mapped-types';
import { CreateSaidaDto } from './create-saida.dto.js';

export class UpdateSaidaDto extends PartialType(CreateSaidaDto) {}
