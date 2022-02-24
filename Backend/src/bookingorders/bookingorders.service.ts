import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { RoomsService } from 'src/rooms/rooms.service';
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
  private connection:Connection,
  private schedulerRegistry: SchedulerRegistry
  ){}

  @Cron(CronExpression.EVERY_10_MINUTES)
  triggerCronJob(date:Date = new Date()) {
      return this.repository.updateVacancy(date,this.connection)
  }
  async create(dto){
    const entity = await this.repository.addBooking(dto,this.connection)
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
