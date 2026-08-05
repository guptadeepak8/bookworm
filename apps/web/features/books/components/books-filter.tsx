"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function BooksFilter() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  function updateParam(
    key: string,
    value: string,
  ) {
    const params = new URLSearchParams(
      searchParams.toString(),
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(
      `${pathname}?${params.toString()}`,
    );
  }

  return (
    <div className="flex gap-4">
      <select
        defaultValue={
          searchParams.get("status") ?? ""
        }
        onChange={(e) =>
          updateParam(
            "status",
            e.target.value,
          )
        }
      >
        <option value="">
          All Status
        </option>

        <option value="want_to_read">
          Want to Read
        </option>

        <option value="reading">
          Reading
        </option>

        <option value="completed">
          Completed
        </option>
      </select>

      <input
        defaultValue={
          searchParams.get("tag") ?? ""
        }
        placeholder="Filter by tag"
        className="rounded-lg border border-neutral-200 px-3"
        onBlur={(e) =>
          updateParam(
            "tag",
            e.target.value,
          )
        }
      />
    </div>
  );
}