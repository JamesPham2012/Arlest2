import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { EntityColumnNotFound, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserDtoWithDate } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity)
  private usersRepository: Repository<UserEntity>){}

  async create(createUserDto: CreateUserDto) {
    var entity = this.usersRepository.create(createUserDto)
    console.log(entity)
    return await this.usersRepository.save(entity)
  }

  findAll() {
    return this.usersRepository.find()
  }

  async findOne(id: number) {
    var entity = await this.usersRepository.findOneOrFail(id)
    if (!entity){
      throw new NotFoundException("not found ")
    }
    return entity
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    var new_date = Date.parse(updateUserDto.date)
    var new_dto  = new UpdateUserDtoWithDate()
    return await this.usersRepository.update(id,updateUserDto)
  }

  remove(id: number) {
    return this.usersRepository
  }

  findbyName(){
    return this.usersRepository.find({lastName:"User1"})
  }
}
