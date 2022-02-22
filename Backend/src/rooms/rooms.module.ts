import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { RoomtypesService } from 'src/roomtypes/roomtypes.service';
import { RoomtypesModule } from 'src/roomtypes/roomtypes.module';

@Module({
  imports:[TypeOrmModule.forFeature([Room]),RoomtypesModule],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports:[RoomsService]
})
export class RoomsModule {}
