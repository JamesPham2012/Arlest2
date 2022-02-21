import { Test, TestingModule } from '@nestjs/testing';
import { BookingordersService } from './bookingorders.service';

describe('BookingordersService', () => {
  let service: BookingordersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingordersService],
    }).compile();

    service = module.get<BookingordersService>(BookingordersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
