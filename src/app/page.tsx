import Posts from "./posts";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">📬 Latest Posts</h1>
      <Posts posts={posts} />
    </div>
  );
}