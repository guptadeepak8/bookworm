import mongoose from "mongoose";
import { BookModel, BookStatus } from "./book.model";
import { CreateBookDto, UpdateBookDto } from "@repo/schemas";


interface FindBooksFilters {
  userId: string;
  status?: BookStatus;
  tag?: string;
}

export async function createBook(data: CreateBookDto & { user: string }) {
  return BookModel.create(data);
}

export async function findBooks({ userId, status, tag }: FindBooksFilters) {
  const filter: {
    user: string;
    status?: BookStatus;
    tags?: { $in: string[] };
  } = {
    user: userId,
  };

  if (status) {
    filter.status = status;
  }

  if (tag) {
    filter.tags = { $in: [tag] };
  }

  return BookModel.find(filter).sort({ createdAt: -1 }).lean();
}

export async function findBookById(id: string, userId: string) {
  return BookModel.findOne({
    _id: id,
    user: userId,
  }).lean();
}

export async function updateBook(
  id: string,
  userId: string,
  data: UpdateBookDto,
) {
  return BookModel.findOneAndUpdate(
    {
      _id: id,
      user: userId,
    },
    data,
    {
      new: true,
      runValidators: true,
    },
  ).lean();
}

export async function deleteBook(id: string, userId: string) {
  return BookModel.findOneAndDelete({
    _id: id,
    user: userId,
  }).lean();
}

export async function getDashboard(userId: string) {
  const [dashboard] = await BookModel.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $facet: {
        summary: [
          {
            $group: {
              _id: null,
              totalBooks: {
                $sum: 1,
              },
              wantToRead: {
                $sum: {
                  $cond: [{ $eq: ["$status", "want_to_read"] }, 1, 0],
                },
              },
              reading: {
                $sum: {
                  $cond: [{ $eq: ["$status", "reading"] }, 1, 0],
                },
              },
              completed: {
                $sum: {
                  $cond: [{ $eq: ["$status", "completed"] }, 1, 0],
                },
              },
            },
          },
        ],
        books: [
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
      },
    },
  ]);

  return dashboard;
}
