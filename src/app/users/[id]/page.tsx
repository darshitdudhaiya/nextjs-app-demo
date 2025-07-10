import { Suspense } from "react";
import UserProfile from "./UserProfile";
import UserPosts from "./UserPosts";
import UserLoading from "./loading";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<UserLoading />}>
        <UserProfile userId={id} />
      </Suspense>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">User's Posts</h2>
        <Suspense
          fallback={<div className="text-center py-8">Loading posts...</div>}
        >
          <UserPosts userId={id} />
        </Suspense>
      </div>
    </div>
  );
}
