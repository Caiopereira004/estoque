import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    categoria: string;

    @Column()
    quantidade: number;

    @Column()
    valor_unitario: number;
}
