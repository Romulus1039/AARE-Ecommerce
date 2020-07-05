import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/order/order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class OrderService {

    constructor(
    @InjectRepository(Order)
        private readonly repository: Repository<Order>) {
    }

    save(order : Order) {
        return this.repository.save(order);
    }

    update(pedido: Order){
        return this.pedidoRepositiry.update(order.id, order);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }
}
