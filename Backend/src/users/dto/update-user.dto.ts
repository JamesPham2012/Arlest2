import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto{
        passport:string
        firstname:string
        date:string
}
export class UpdateUserDtoWithDate{
    passport:string
    firstname:string
    date:Date
}
