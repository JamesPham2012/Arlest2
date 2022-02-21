import { Injectable } from '@nestjs/common';
import { CreateBookingorderDto } from './dto/create-bookingorder.dto';
import { UpdateBookingorderDto } from './dto/update-bookingorder.dto';

@Injectable()
export class BookingordersService {
  create(createBookingorderDto: CreateBookingorderDto) {
    return 'This action adds a new bookingorder';
  }

  findAll() {
    return `This action returns all bookingorders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookingorder`;
  }

  update(id: number, updateBookingorderDto: UpdateBookingorderDto) {
    return `This action updates a #${id} bookingorder`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookingorder`;
  }
}
