import { BookStatus } from "@repo/schemas";
import { BooksPage } from "../../../features/books";

interface Props {
  searchParams: Promise<{
    status?: BookStatus;
    tag?: string;
  }>;
}

export default async function Page({
  searchParams,
}: Props) {
  const params = await searchParams;

  return (
    <BooksPage
      status={params.status}
      tag={params.tag}
    />
  );
}