import { Suspense } from "react";
import PostsList from "./PostsList";
import PostsLoading from "./loading";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <Suspense fallback={<PostsLoading />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
