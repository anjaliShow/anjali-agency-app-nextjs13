import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    budget: { type: String },
    description: { type: String },
    timeframe: { type: String },
  },
  { timestamps: false }
);

export const Contact = models.Contact || model('Contact', ContactSchema);
