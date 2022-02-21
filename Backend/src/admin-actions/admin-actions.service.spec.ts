import { Test, TestingModule } from '@nestjs/testing';
import { AdminActionsService } from './admin-actions.service';

describe('AdminActionsService', () => {
  let service: AdminActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminActionsService],
    }).compile();

    service = module.get<AdminActionsService>(AdminActionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
