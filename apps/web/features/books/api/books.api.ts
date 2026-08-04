import type {
  ApiResponse,
  Book,
  GetBooksQueryDto,
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