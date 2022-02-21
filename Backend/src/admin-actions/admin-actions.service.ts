import { Injectable } from '@nestjs/common';
import { CreateAdminActionDto } from './dto/create-admin-action.dto';
import { UpdateAdminActionDto } from './dto/update-admin-action.dto';

@Injectable()
export class AdminActionsService {
  create(createAdminActionDto: CreateAdminActionDto) {
    return 'This action adds a new adminAction';
  }

  findAll() {
    return `This action returns all adminActions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminAction`;
  }

  update(id: number, updateAdminActionDto: UpdateAdminActionDto) {
    return `This action updates a #${id} adminAction`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminAction`;
  }
}
