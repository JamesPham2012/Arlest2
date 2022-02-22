import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateRoomtypeDto {
    @ApiProperty()
    Pricing: number;
    @ApiPropertyOptional()
    Description: string;
  
}
