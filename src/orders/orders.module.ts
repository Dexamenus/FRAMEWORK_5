import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller.js';
import { Order } from './entities/order_entity.js';
import { OrderItem } from './entities/order-item.entity.js';
import { Payment } from './entities/payment.entity.js';
import { Shipment } from './entities/shipment.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Payment, Shipment])],
  controllers: [OrdersController],
  exports: [TypeOrmModule],
})
export class OrdersModule {}
