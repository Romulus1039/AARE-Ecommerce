import { Controller, Delete, Post, Body, Get, Param } from '@nestjs/common';
import { OrderItemService } from 'src/orderitem/orderitem.service';
import { OrderItemEntity } from 'src/orderitem/orderitem.entity';

@Controller('Orderitem')
export class OrderitemController {
    
    constructor (private readonly service : OrderitemService){}

    @Post()
    save(@Body() Orderitem : Orderitem){
        return this.service.save(Orderitem);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(":id")
    findById (@Param() id : number){
            return this.service.findById(id);
        }

    @Delete(":id")
    remove(@Param() id : number){
        return this.remove(id);
    }
}