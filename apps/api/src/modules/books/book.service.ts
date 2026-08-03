import { HTTP_STATUS } from "../../constants/http-status";
import { AppError } from "../../utils/app-error";
import { BookStatus } from "./book.model";

import {
  createBook,
  deleteBook,
  findBookById,
  findBooks,
  getDashboard,
  updateBook,
} from "./book.repository";

import { CreateBookDto, UpdateBookDto } from "./book.validation";

export async function createBookService(userId: string, data: CreateBookDto) {
  return createBook({
    ...data,
    user: userId,
  });
}

export async function getBooksService(
  userId: string,
  status?: BookStatus,
  tag?: string,
) {
  return findBooks({
    userId,
    status,
    tag,
  });
}

export async function getBookByIdService(id: string, userId: string) {
  const book = await findBookById(id, userId);

  if (!book) {
    throw new AppError("Book not found", HTTP_STATUS.NOT_FOUND);
  }

  return book;
}

export async function updateBookService(
  id: string,
  userId: string,
  data: UpdateBookDto,
) {
  const updatedBook = await updateBook(id, userId, data);

  if (!updatedBook) {
    throw new AppError("Book not found", HTTP_STATUS.NOT_FOUND);
  }

  return updatedBook;
}

export async function deleteBookService(id: string, userId: string) {
  const deletedBook = await deleteBook(id, userId);

  if (!deletedBook) {
    throw new AppError("Book not found", HTTP_STATUS.NOT_FOUND);
  }
}

export async function getDashboardService(userId: string) {
  const dashboard = await getDashboard(userId);

  return {
    summary: dashboard.summary[0] ?? {
      totalBooks: 0,
      wantToRead: 0,
      reading: 0,
      completed: 0,
    },
    books: dashboard.books,
  };
}
