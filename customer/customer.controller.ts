import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CustomerEntity } from 'src/customer.entity';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {

    constructor(private readonly service: CustomerService) { }

    @Post()
    save(@Body() customer: CustomerService) {
        return this.service.save(customer);
    }



    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Get(":cpf")
    findByCpf(@Param() cpf: string) {
        return this.service.findById(cpf);
    }

    @Get(":adess")
    findByAdress(@Param() adress: string) {
        return this.service.findById(adress);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() clienteDto: ClienteDto){
        clienteDto.id = id;
        const cliente = plainToClass(Cliente, clienteDto);

        return this.service.update(cliente);
    }

    @Delete(":id")
    delete(@Param('id') id: number){
        this.service.delete(id);
    }    

}
