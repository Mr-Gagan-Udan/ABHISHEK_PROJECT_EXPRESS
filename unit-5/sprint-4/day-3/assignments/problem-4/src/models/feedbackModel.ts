import mongoose, { Schema, Document } from 'mongoose';

interface IFeedback extends Document {
  name: string;
  email: string;
  rating: number;
  comments: string;
}

const FeedbackSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
});

export default mongoose.model<IFeedback>('Feedback', FeedbackSchema);
