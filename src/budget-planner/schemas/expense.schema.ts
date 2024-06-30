import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema()
export class Expense {
  @Prop({ required: true })
  price: number;

  @Prop({ required: false })
  description: string;

  @Prop({ type: Date, required: true, default: Date.now })
  date: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
