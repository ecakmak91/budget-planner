import { Test, TestingModule } from '@nestjs/testing';
import { BudgetPlannerController } from './budget-planner.controller';

describe('BudgetPlannerController', () => {
  let controller: BudgetPlannerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetPlannerController],
    }).compile();

    controller = module.get<BudgetPlannerController>(BudgetPlannerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
