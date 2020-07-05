import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { OrderService } from "src/order/order.service";
import { OrderEntity } from 'src/order/order.entity';


@Controller('order')
export class OrderController {

    constructor(private readonly service : OrderService){}

    @Post()
    save(@Body() order: Order) {
        return this.service.save(order);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() orderDto: orderDto){
        if (!this.service.findById(id)) {
            throw new HttpException('Pedido não Encontrado.', HttpStatus.NOT_FOUND);
        }

        orderDto.id = id;
        const order = plainToClass(order, orderDto);

        return this.service.update(order);
    }

    @Delete(":id")
    delete(@Param('id') id: number){
        if (!this.service.findById(id)) {
            throw new HttpException('Pedido não Encontrado.', HttpStatus.NOT_FOUND);
        }

        this.service.delete(id);
}
