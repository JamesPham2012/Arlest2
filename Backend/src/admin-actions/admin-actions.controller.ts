import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminActionsService } from './admin-actions.service';
import { CreateAdminActionDto } from './dto/create-admin-action.dto';
import { UpdateAdminActionDto } from './dto/update-admin-action.dto';

@Controller('admin-actions')
export class AdminActionsController {
  constructor(private readonly adminActionsService: AdminActionsService) {}

  
  @Post()
  create(@Body() createAdminActionDto: CreateAdminActionDto) {
    return this.adminActionsService.create(createAdminActionDto);
  }

  @Get()
  findAll() {
    return this.adminActionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminActionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminActionDto: UpdateAdminActionDto) {
    return this.adminActionsService.update(+id, updateAdminActionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminActionsService.remove(+id);
  }
}
