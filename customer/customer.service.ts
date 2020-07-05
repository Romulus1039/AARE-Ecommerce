import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from 'src/customer/customer.entity';

@Injectable()
export class CustomerService {
  [x: string]: any;

  constructor(
    @InjectRepository(Customer)
    private usersRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<CustomerEntity[]> {
    return this.customersRepository.find();
  }

  findOne(cpf: string): Promise<Customer> {
    return this.customersRepository.findOne(cpf);
  }
  ;

    async create(customer: Customer) {
        return this.repository.save();
    }

    async update(cliente: Cliente){
        return this.repositiry.update(cliente.id, cliente);
    }

    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

}
