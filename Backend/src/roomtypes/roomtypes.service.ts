import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomtypeDto } from './dto/create-roomtype.dto';
import { UpdateRoomtypeDto } from './dto/update-roomtype.dto';
import { RoomTypeDetails } from './entities/roomtype.entity';

@Injectable()
export class RoomtypesService {
  constructor(@InjectRepository(RoomTypeDetails)
  private roomRepository: Repository<RoomTypeDetails>){}
  create(createRoomtypeDto: CreateRoomtypeDto) {
    var entity = this.roomRepository.create(createRoomtypeDto)
    return this.roomRepository.save(entity);
  }

  findAll() {
    return `This action returns all roomtypes`;
  }

  async findOne(id: number) {
    return await this.roomRepository.findOne(id)
  }

  update(id: number, updateRoomtypeDto: UpdateRoomtypeDto) {
    return `This action updates a #${id} roomtype`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomtype`;
  }
}
