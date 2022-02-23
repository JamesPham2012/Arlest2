import { Module } from '@nestjs/common';
import { BookingordersService } from './bookingorders.service';
import { BookingordersController } from './bookingorders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingOrder } from './entities/bookingorder.entity';
import { UsersModule } from 'src/users/users.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { BookingOrderRepository } from './bookingorders.repository';

@Module({
  imports:[TypeOrmModule.forFeature([BookingOrderRepository]),UsersModule,RoomsModule],
  controllers: [BookingordersController],
  providers: [BookingordersService]
})
export class BookingordersModule {}
