import { ApiProperty, PartialType } from "@nestjs/swagger";
import { DeepPartial } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends PartialType(UserEntity){
    @ApiProperty()
    firstname:string;
    @ApiProperty()
    lastname:string;
    @ApiProperty()
    passport:string;
}
