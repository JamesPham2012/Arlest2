import { ApiProperty, PartialType } from "@nestjs/swagger";
import { BookingOrder } from "../entities/bookingorder.entity";

export class CreateBookingorderDto {

    @ApiProperty()
    userid:string
    @ApiProperty()
    roomid:string

}   


export class CreateBookingorderDtoResponse extends PartialType(BookingOrder){
    userid:string
    roomid:string
    uuid:string
}