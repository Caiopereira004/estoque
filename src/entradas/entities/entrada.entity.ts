import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm";

import { Produto } from "../../produto/entities/produto.entity.js";

@Entity('entradas')
export class Entradas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    produto_id: number;
    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id'})
    produto: Produto

    @CreateDateColumn({type: 'timestamp', name:'data_entrada'})
    data_entrada: Date;

    @Column()
    quantidade: number;

}

