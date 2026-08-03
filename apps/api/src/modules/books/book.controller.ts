import { Request, Response } from "express";



import {
  createBookService,
  deleteBookService,
  getBookByIdService,
  getBooksService,
  getDashboardService,
  updateBookService,
} from "./book.service";
import { bookParamsSchema, createBookSchema, getBooksQuerySchema, updateBookSchema } from "@repo/schemas";

export async function createBook(req: Request, res: Response) {
  const body = createBookSchema.parse(req.body);

  const book = await createBookService(req.user!.userId, body);

  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: book,
  });
}

export async function getBooks(req: Request, res: Response) {
  const query = getBooksQuerySchema.parse(req.query);

  const books = await getBooksService(
    req.user!.userId,
    query.status,
    query.tag,
  );

  res.json({
    success: true,
    data: books,
  });
}

export async function getBookById(req: Request, res: Response) {
  const { id } = bookParamsSchema.parse(req.params);

  const book = await getBookByIdService(id, req.user!.userId);

  res.json({
    success: true,
    data: book,
  });
}

export async function updateBook(req: Request, res: Response) {
  const { id } = bookParamsSchema.parse(req.params);

  const body = updateBookSchema.parse(req.body);

  const book = await updateBookService(id, req.user!.userId, body);

  res.json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
}

export async function deleteBook(req: Request, res: Response) {
  const { id } = bookParamsSchema.parse(req.params);

  await deleteBookService(id, req.user!.userId);

  res.json({
    success: true,
    message: "Book deleted successfully",
  });
}


export async function getDashboard(
  req: Request,
  res: Response,
) {
  const dashboard = await getDashboardService(
    req.user!.userId,
  );

  res.json({
    success: true,
    data: dashboard,
  });
}