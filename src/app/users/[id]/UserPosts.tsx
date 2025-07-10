interface Post {
    id: number
    title: string
    body: string
  }
  
  async function fetchUserPosts(userId: string): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 400))
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if (!res.ok) throw new Error('Failed to fetch user posts')
    return res.json()
  }
  
  interface Props {
    userId: string
  }
  
  export default async function UserPosts({ userId }: Props) {
    const posts = await fetchUserPosts(userId)
  
    return (
      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2 capitalize">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.body}</p>
          </article>
        ))}
      </div>
    )
  }