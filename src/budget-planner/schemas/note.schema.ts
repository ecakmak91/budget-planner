import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Date, required: true, default: Date.now })
  date: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
