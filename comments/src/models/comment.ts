import mongoose from "mongoose";

interface CommentAttrs {
  userId: string;
  postId: string;
  content: string;
  createAt: Date;
}

interface CommentDoc extends mongoose.Document {
  userId: string;
  postId: string;
  content: string;
  createAt: Date;
}

interface CommentModel extends mongoose.Model<CommentDoc> {
  build(attrs: CommentAttrs): CommentDoc;
}

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
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

commentSchema.statics.build = (attrs: CommentAttrs) => {
  return new Comment(attrs);
};

const Comment = mongoose.model<CommentDoc, CommentModel>(
  "comments",
  commentSchema
);

export { Comment };
