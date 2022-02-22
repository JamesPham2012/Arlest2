import { ApiProperty } from "@nestjs/swagger";



export class CreateRoomDto {
    @ApiProperty()
    RoomType:string;
}
