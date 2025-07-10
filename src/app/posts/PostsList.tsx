interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function fetchPosts(): Promise<Post[]> {
  // Simulate slower API call to show streaming
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function PostsList() {
  const posts = await fetchPosts();

  return (
    <div className="grid gap-6">
      {posts.slice(0, 10).map((post) => (
        <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 capitalize">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.body}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Post #{post.id}</span>
            <span className="text-sm text-blue-600">User {post.userId}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
