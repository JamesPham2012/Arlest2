import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingorderDto } from './create-bookingorder.dto';

export class UpdateBookingorderDto extends PartialType(CreateBookingorderDto) {}
