import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoomtypesModule } from './roomtypes/roomtypes.module';
import { BookingordersModule } from './bookingorders/bookingorders.module';

@Module({
  imports: [UsersModule, RoomsModule, RoomtypesModule, BookingordersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
