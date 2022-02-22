import { Module } from '@nestjs/common';
import { RoomtypesService } from './roomtypes.service';
import { RoomtypesController } from './roomtypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomTypeDetails } from './entities/roomtype.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RoomTypeDetails])],
  controllers: [RoomtypesController],
  providers: [RoomtypesService],
  exports:[RoomtypesService]
})
export class RoomtypesModule {}
