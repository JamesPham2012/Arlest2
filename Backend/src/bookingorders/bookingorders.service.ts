import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { identity } from 'rxjs';
import { Room } from 'src/rooms/entities/room.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Connection, Entity, EntityManager, Repository, Transaction, TransactionManager } from 'typeorm';
import { BookingOrderRepository } from './bookingorders.repository';
import { UpdateBookingorderDto } from './dto/update-bookingorder.dto';

@Injectable()
export class BookingordersService {
  async findOneTest(id: string) {
    return await this.repository.findOne(id)
  }
  constructor(
  private repository: BookingOrderRepository,
  private roomService: RoomsService,
  private userService: UsersService,
  private connection:Connection
  ){}

  async create(userid,roomid){
    const entity = await this.repository.addBooking(userid,roomid,this.connection)
    return entity
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOneUUID(id: string) {//via uuid 
    var entity = await this.repository.findOneUUID(id);
    return   entity
    // return this.repository.findByIds()
    return this.repository.findOne(id)
  }

  update(id: string, updateBookingorderDto: UpdateBookingorderDto) {
    return this.repository.updateByUUID(id,updateBookingorderDto)
  }

  remove(id: number) {
    return `This action removes a #${id} bookingorder`;
  }
}
