import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomTypeDetails } from 'src/roomtypes/entities/roomtype.entity';
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


  async create(createRoomDto: CreateRoomDto,externakService:RoomtypesService=this.roomTypeservice) {
    var host_entity:RoomTypeDetails =await externakService.findOne(parseInt(createRoomDto.RoomType))
    var entity=  this.roomRepository.create({"RoomType":host_entity})
    
    // var entity = new Room();
    // this.roomRepository.
    // entity.RoomType=createRoomDto.RoomType;  ??????
    return this.roomRepository.save(entity);
  }

  findAll() {
    return `This action returns all rooms`;
  }

  findOne(id: number) {
    return     this.roomRepository.findOneOrFail({RoomID:id})
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }

  async occupy(id:number){
    var pre_entity = await this.roomRepository.findOneOrFail({RoomID:id})
    return await this.roomRepository.update(pre_entity,{isVacant:false})
  }

  async occupyObject(object:Room){
    var pre_entity = await this.roomRepository.findOneOrFail(object)
    return await this.roomRepository.update(pre_entity,{isVacant:false})
  }
}
