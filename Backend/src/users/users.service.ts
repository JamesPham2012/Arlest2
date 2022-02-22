import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity)
  private usersRepository: Repository<UserEntity>){}

  async create(createUserDto: CreateUserDto) {
    var entity = await this.usersRepository.create(createUserDto)
    console.log(entity)
    return await this.usersRepository.save(entity)
  }

  findAll() {
    return this.usersRepository.find()
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.usersRepository
  }
}
