import type {
  ApiResponse,
  Book,
  CreateBookDto,
  GetBooksQueryDto,
  UpdateBookDto,
} from "@repo/schemas";
import { api } from "../../../lib/axios";



export async function getBooks(
  params?: GetBooksQueryDto,
) {
  const { data } =
    await api.get<ApiResponse<Book[]>>(
      "/books",
      {
        params,
      },
    );

  return data.data;
}

export async function getBook(id: string) {
  const { data } =
    await api.get<ApiResponse<Book>>(
      `/books/${id}`,
    );

  return data.data;
}

export async function createBook(
  book: CreateBookDto,
) {
  const { data } =
    await api.post<ApiResponse<Book>>(
      "/books",
      book,
    );

  return data.data;
}

export async function updateBook(
  id: string,
  book: UpdateBookDto,
) {
  const { data } =
    await api.patch<ApiResponse<Book>>(
      `/books/${id}`,
      book,
    );

  return data.data;
}

export async function deleteBook(
  id: string,
) {
  const { data } =
    await api.delete<ApiResponse<null>>(
      `/books/${id}`,
    );

  return data;
}