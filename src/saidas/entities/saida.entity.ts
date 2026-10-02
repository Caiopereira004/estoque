import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity.js";

@Entity('saidas')
export class Saidas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    produto_id: number;
    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id'})
    produto: Produto
    
    @CreateDateColumn({type: 'timestamp', name:'data_saida'})
    data_saida: Date;

    @Column()
    quantidade: number;
}
