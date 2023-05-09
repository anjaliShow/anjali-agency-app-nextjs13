import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  title: { type: String },
  category: { type: String },
  cover: { type: String },
  description: { type: String },
  description2: { type: String },
  date: { type: String },
});

export const Blog = models.Blog || model('Blog', BlogSchema);
