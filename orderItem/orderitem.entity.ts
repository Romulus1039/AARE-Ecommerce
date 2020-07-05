import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Order } from "src/order/order.entity";
import { ProductEntity } from "src/product/product.entity";
import { ProductService } from "src/product/product.service";

@Entity ("Orderitem")
export class OrderItem{
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product;


    @ManyToOne(type => Order, Order => Order.orderitem)
    @JoinColumn({name: "OrderId"})
    order: Order;

    @Column({name: 'Quantity', type: 'int'})
    quantity: number;

    @Column({name: 'Unit Value', type: 'decimal'})
    unitValue: number;

    @Column({name: 'Total Value', type: 'decimal'})
    totalValue:number;


}