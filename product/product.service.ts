import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly repository: Repository<Product>) {

    update(produto: Product){
        return this.repositiry.update(product.id, produto);
    }

    save(produto : Product) {
        return this.repository.save(product);
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
