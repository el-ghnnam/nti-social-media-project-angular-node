import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  body: string;
  userid: mongoose.Types.ObjectId;
  date: Date;
  imgurl: string;
  like: boolean;
  likes: number;
  comments: string[];
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  userid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  imgurl: { type: String, default: 'https://picsum.photos/200' },
  like: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
});

export default mongoose.model<IPost>('Post', PostSchema);
