export default function PostsLoading() {
  return (
    <div className="grid gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-300 rounded w-20"></div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
