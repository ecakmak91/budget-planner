import { Test, TestingModule } from '@nestjs/testing';
import { BudgetPlannerService } from './budget-planner.service';

describe('BudgetPlannerService', () => {
  let service: BudgetPlannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetPlannerService],
    }).compile();

    service = module.get<BudgetPlannerService>(BudgetPlannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
