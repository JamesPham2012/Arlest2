import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoomtypesModule } from './roomtypes/roomtypes.module';
import { BookingordersModule } from './bookingorders/bookingorders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminActionsModule } from './admin-actions/admin-actions.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, RoomsModule, RoomtypesModule, BookingordersModule, AdminActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
