import { Test, TestingModule } from '@nestjs/testing';
import { BookingordersController } from './bookingorders.controller';
import { BookingordersService } from './bookingorders.service';

describe('BookingordersController', () => {
  let controller: BookingordersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingordersController],
      providers: [BookingordersService],
    }).compile();

    controller = module.get<BookingordersController>(BookingordersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
