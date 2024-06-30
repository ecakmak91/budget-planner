import { Injectable } from '@nestjs/common';
// import { Expense } from './schemas/expense.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense, ExpenseDocument } from './schemas/expense.schema';
import { Note, NoteDocument } from './schemas/note.schema';

@Injectable()
export class BudgetPlannerService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<ExpenseDocument>,
    @InjectModel(Note.name) private noteModel: Model<NoteDocument>,
  ) {}

  async addExpense(createExpenseDto: any): Promise<Expense> {
    const createdExpense = new this.expenseModel(createExpenseDto);
    return await createdExpense.save();
  }
  async addNote(createNoteDto: any): Promise<Note> {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }
  async getNotes(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async deleteAllNotes(): Promise<void> {
    await this.noteModel.deleteMany({});
  }

  async getExpensesBetweenDates(
    startDate: Date,
    endDate: Date,
  ): Promise<Expense[]> {
    return this.expenseModel
      .find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .exec();
  }

  getHello(): string {
    return 'Hello World!2';
  }
  getLimit(price: number): string {
    return price.toString();
  }
}
