import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingordersService } from './bookingorders.service';
import { CreateBookingorderDto } from './dto/create-bookingorder.dto';
import { UpdateBookingorderDto } from './dto/update-bookingorder.dto';
import { BookingOrder } from './entities/bookingorder.entity';

@Controller('bookingorders')
export class BookingordersController {
  constructor(private readonly bookingordersService: BookingordersService) {}
  @Get("/a11/:id")
  getTest(@Param("id") id:string){
    return this.bookingordersService.findOneTest(id)
  }

  @Post()
  create(@Body() createBookingorderDto: CreateBookingorderDto) {
    return this.bookingordersService.create(createBookingorderDto.userid,createBookingorderDto.roomid);
  }

  @Get()
  findAll()  {
    return this.bookingordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bookingordersService.findOneUUID(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingorderDto: UpdateBookingorderDto) {
    return this.bookingordersService.update(id, updateBookingorderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingordersService.remove(+id);
  }

  
}
