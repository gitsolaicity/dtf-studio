"use client";

import Link from "next/link";

interface Result {
  title: string;
  url: string;
}

export default function SearchResults({ results }: { results: Result[] }) {
  if (results.length === 0) {
    return <p className="mt-4 text-sm text-gray-500">Нічого не знайдено.</p>;
  }

  return (
    <ul className="mt-4 space-y-2">
      {results.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.url}
            className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
