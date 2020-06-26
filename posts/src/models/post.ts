import mongoose from "mongoose";

interface PostAttrs {
  userId: string;
  title: string;
  content: string;
  images: string[];
  videos: string[];
  createAt: Date;
}

interface PostDoc extends mongoose.Document {
  userId: string;
  title: string;
  content: string;
  images: string[];
  videos: string[];
  createAt: Date;
}

interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: PostAttrs): PostDoc;
}

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    videos: {
      type: [String],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>("posts", postSchema);

export { Post };
