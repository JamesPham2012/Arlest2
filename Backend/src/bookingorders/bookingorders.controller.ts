import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingordersService } from './bookingorders.service';
import { CreateBookingorderDto } from './dto/create-bookingorder.dto';
import { UpdateBookingorderDto } from './dto/update-bookingorder.dto';

@Controller('bookingorders')
export class BookingordersController {
  constructor(private readonly bookingordersService: BookingordersService) {}

  @Post()
  create(@Body() createBookingorderDto: CreateBookingorderDto) {
    return this.bookingordersService.alternateCreate(createBookingorderDto);
  }

  @Get()
  findAll() {
    return this.bookingordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bookingordersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingorderDto: UpdateBookingorderDto) {
    return this.bookingordersService.update(+id, updateBookingorderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingordersService.remove(+id);
  }
}
