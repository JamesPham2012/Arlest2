import { ApiProperty, PartialType } from "@nestjs/swagger";
import { BookingOrder } from "../entities/bookingorder.entity";

export class CreateBookingorderDto {

    @ApiProperty()
    userid:string
    @ApiProperty()
    roomid:string
    @ApiProperty({description: 'Date object in JS, converted to timestampz,usig format ISO8601 for transportation with .toISOString() '})
    check_in_date : string; 
    @ApiProperty({description: 'Date object in JS, converted to timestampz,using format ISO8601 for transportation with .toISOString() '})
    check_out_date : string;

}   

