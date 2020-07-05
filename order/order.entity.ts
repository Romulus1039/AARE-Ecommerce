import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from 'src/order/order.entity';
import { CustomerEntity } from 'src/customer/customer.entity';

@Entity()
export class extends OrderService {
    id : number
    orderNumber :  string
    orderDate: Date
    total : number
    customer: Customer

    constructor(private authorRepository: OrderRepository) {}

    @PrimaryGeneratedColumn()
   id: number;

   @Column({name: 'código',  type: "int" })
   codigo: number;

   @Column({name: 'data-do-pedido', type: 'date'})
   orderDate: Date;

   @Column({name: 'data-de-entrega-prevista', type: 'date'})
   dataEntregaPrevista: Date;

   @Column({type: 'varchar'})
   transportadora: String;

   @Column({name: 'valor-total', type: 'money'})
   valueTotal: number;

   @Column({name: 'valor-dos-produtos', type: 'money'})
   valueProducts: number;

   @Column({name: 'valor-dos-descontos', type: 'money'})
   valueDescontos: number;

   @ManyToOne(() => Cliente, cliente => cliente.pedidos, {eager: true})
   @JoinColumn({name: 'cliente_id'})
   customer: Customer;

   @Column()
   customer_id: number;

   @OneToMany(() => OrderItem, itens => itens.order, {
       cascade: true,
       eager:true
   })
   itens: OrderItem[];

   @Column({name: 'endereço-de-entrega', type: 'varchar'})
   enderecoEntrega: String;
}
