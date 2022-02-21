import { Module } from '@nestjs/common';
import { BookingordersService } from './bookingorders.service';
import { BookingordersController } from './bookingorders.controller';

@Module({
  controllers: [BookingordersController],
  providers: [BookingordersService]
})
export class BookingordersModule {}
