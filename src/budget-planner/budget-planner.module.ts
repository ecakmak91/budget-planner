import { Module } from '@nestjs/common';
import { BudgetPlannerController } from './budget-planner.controller';
import { BudgetPlannerService } from './budget-planner.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense, ExpenseSchema } from './schemas/expense.schema';
import { Note, NoteSchema } from './schemas/note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  controllers: [BudgetPlannerController],
  providers: [BudgetPlannerService],
  exports: [MongooseModule],
})
export class BudgetPlannerModule {}
