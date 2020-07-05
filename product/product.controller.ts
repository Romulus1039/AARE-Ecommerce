import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { ProductEntity } from 'src/product/product.entity';
import { ProductDto } from './product.dto';
import { Product } from './product.entity';
import { plainToClass } from "class-transformer";

@Controller('product')
export class ProductController {

    constructor(private readonly service : ProductService){}

    @Post()
    save(@Body() produto: Product) {
        return this.service.save(Product);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() productDto: ProductDto){
        productDto.id = id;

        const product = plainToClass(Product, productDto);
        return this.service.update(produto);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }

}
