import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomtypesService } from 'src/roomtypes/roomtypes.service';
import { EntityManager, Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,//cutr
    private roomTypeservice: RoomtypesService
  ){}


  create(createRoomDto: CreateRoomDto,externakService:RoomtypesService=this.roomTypeservice) {
    console.log(this.roomTypeservice.findOne(1))
    // var entity = new Room();
    // this.roomRepository.
    // entity.RoomType=createRoomDto.RoomType;  ??????
    return 'This action adds a new room';
  }

  findAll() {
    return `This action returns all rooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
