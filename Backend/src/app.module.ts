import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoomtypesModule } from './roomtypes/roomtypes.module';
import { BookingordersModule } from './bookingorders/bookingorders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminActionsModule } from './admin-actions/admin-actions.module';
import { Connection } from 'typeorm';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, RoomsModule, RoomtypesModule, BookingordersModule, AdminActionsModule, ScheduleModule.forRoot(),SchedulerRegistry],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
