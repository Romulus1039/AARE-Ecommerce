import { Injectable } from '@nestjs/common';
import { OrderItemEntity } from 'src/orderitem/orderitem.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable('OrderItem')
export class OrderItemService {
    
    constructor(
        @InjectRepository(OrderItem)
        private readonly repository: Repository<OrderItem>) {
    }

    save(itempedido : OrderItem) {
        return this.repository.save(orderitem);
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