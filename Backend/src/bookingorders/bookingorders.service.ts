import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { Room } from 'src/rooms/entities/room.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Entity, EntityManager, Repository, Transaction, TransactionManager } from 'typeorm';
import { CreateBookingorderDto } from './dto/create-bookingorder.dto';
import { UpdateBookingorderDto } from './dto/update-bookingorder.dto';
import { BookingOrder } from './entities/bookingorder.entity';

@Injectable()
export class BookingordersService {
  constructor(@InjectRepository(BookingOrder)
  private repository: Repository<BookingOrder>,
  private roomService: RoomsService,
  private userService: UsersService
  ){}
  async create(createBookingorderDto: CreateBookingorderDto) {
    var room_entity:Room=await this.roomService.findOne(parseInt(createBookingorderDto.roomid))
    var user_entity:UserEntity=await this.userService.findOne(parseInt(createBookingorderDto.userid))
    this.roomService.occupy(parseInt(createBookingorderDto.roomid))                                                                    // TRANSACTION REQUIRED and all of these are to be in independent repository
    var entity  = this.repository.create({"Room":room_entity,"User":user_entity})
    return this.repository.save(entity)
    
  }
  @Transaction()
    async alternateCreate(createBookingorderDto: CreateBookingorderDto,@TransactionManager() entityManager?: EntityManager) {
      await this.roomService.occupy(parseInt(createBookingorderDto.roomid))          
      var room_entity:Room=await this.roomService.findOne(parseInt(createBookingorderDto.roomid))
      var user_entity:UserEntity=await this.userService.findOne(parseInt(createBookingorderDto.userid))
      throw new Error("duh")
      // TRANSACTION REQUIRED and all of these are to be in independent repository
      var entity  = this.repository.create({"Room":room_entity,"User":user_entity})
      await this.repository.save(entity)
      return await this.repository.findOneOrFail(entity)
    }


  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {//via uuid 
    var entity = await this.repository.find({uuid:`${id}`});
    return   entity
    // return this.repository.findByIds()
    return this.repository.findOne(id)
  }

  update(id: number, updateBookingorderDto: UpdateBookingorderDto) {
    return `This action updates a #${id} bookingorder`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookingorder`;
  }
}
