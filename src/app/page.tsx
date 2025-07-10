export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Next.js Server Components Demo</h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore posts and users with automatic layouts, server components, and streaming UI
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">📝 Posts</h2>
          <p className="text-gray-600">Browse blog posts with server-side rendering</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">👥 Users</h2>
          <p className="text-gray-600">Explore user profiles with nested routing</p>
        </div>
      </div>
    </div>
  )
}