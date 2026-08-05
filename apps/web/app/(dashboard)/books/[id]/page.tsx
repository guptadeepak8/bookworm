import { EditBookPage } from "../../../../features/books/components/edit-book-page";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  return <EditBookPage id={id} />;
}