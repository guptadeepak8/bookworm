import { Schema, model } from "mongoose";

export const BOOK_STATUS = ["want_to_read", "reading", "completed"] as const;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: BOOK_STATUS,
      default: "want_to_read",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(_, ret: any) {
        ret.id = ret._id.toString();

        delete ret._id;

        return ret;
      },
    },
  },
);




export type BookStatus = (typeof BOOK_STATUS)[number];

export const BookModel = model("Book", bookSchema);
