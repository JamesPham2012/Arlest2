import { Test, TestingModule } from '@nestjs/testing';
import { AdminActionsController } from './admin-actions.controller';
import { AdminActionsService } from './admin-actions.service';

describe('AdminActionsController', () => {
  let controller: AdminActionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminActionsController],
      providers: [AdminActionsService],
    }).compile();

    controller = module.get<AdminActionsController>(AdminActionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
