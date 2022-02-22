import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingorderDto {

    @ApiProperty()
    userid:string
    @ApiProperty()
    roomid:string

}   
