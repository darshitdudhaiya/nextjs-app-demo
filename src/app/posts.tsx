"use client";

import { useState, useTransition } from "react";

export default function Posts({ posts }: { posts: any[] }) {
  const [visible, setVisible] = useState(3);
  const [isPending, startTransition] = useTransition();

  const loadMore = () => {
    startTransition(() => {
      setVisible((v) => v + 2);
    });
  };

  return (
    <div className="space-y-6">
      {posts.slice(0, visible).map((post) => (
        <div key={post.id} className="border p-4 rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700 mt-1 text-sm">{post.body}</p>
        </div>
      ))}

      {visible < posts.length && (
        <button
          onClick={loadMore}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
