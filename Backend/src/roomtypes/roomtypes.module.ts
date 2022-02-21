import { Module } from '@nestjs/common';
import { RoomtypesService } from './roomtypes.service';
import { RoomtypesController } from './roomtypes.controller';

@Module({
  controllers: [RoomtypesController],
  providers: [RoomtypesService]
})
export class RoomtypesModule {}
