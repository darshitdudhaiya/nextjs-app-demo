export default function UsersLoading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 w-24"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-32"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 w-20"></div>
          <div className="h-4 bg-gray-300 rounded w-28"></div>
        </div>
      ))}
    </div>
  );
}
