import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OrderByCondition } from "typeorm";
import { OrderEntity } from "src/order/order.entity";

@Entity ("Customer")
export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Name', type: 'varchar', length: '80'})
    name: String;

    @Column({name: 'Cpf', type: 'varchar', length: '15'})
    cpf: String;

    @Column({type: 'varchar'})
    rg: string;

    @Column({name: 'Address', type: 'varchar', length: '80'})
    address: String;

    @Column({type: 'varchar'})
    bairro: string;

    @Column({type: 'varchar'})
    cidade: string;

    @Column({type: 'varchar'})
    cep: string;

    @OneToMany(type => order, order => order.Customer)
    order: Array<Order>;

}
