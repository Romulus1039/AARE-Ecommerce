import { Module } from '@nestjs/common';
import { OrderItemController } from 'src/orderitem/orderitem.controller';
import { OrderItemService } from 'src/orderitem/orderitem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEtity } from 'src/customer/customer.entity';
import { OrdrItemEntity } from 'src/orderitem/orderitem.entity';
import { OrderEntity } from 'src/order/order.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CustomerService } from 'src/customer/customer.service';
import { OrdrService } from 'src/order/order.service';
import { ProductService } from 'src/product/product.service';
import { CustomerController } from 'src/customer/customer.controller';
import { OrderController } from 'src/order/order.controller';
import { ProductController } from 'src/product/product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'local',
      port: 3000,
      username: 'root',
      password: 'root',
      database: 'avaliacao-api',
      entities: [
        Customer
      ],
      synchronize: true,
      logging: true,

    }),
  ],
  controllers: [
    CustomerController
    OrderItemController,
    OrderController,
    ProductController,
  ],

  providers: [
    CustomerService,
    OrderItemService,
    OrderService,
    ProductService

})
export class AppModule {}

