export default function UserLoading() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-8 bg-gray-300 rounded w-48"></div>
        <div className="h-6 bg-gray-300 rounded w-24"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="h-5 bg-gray-300 rounded mb-2 w-32"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 w-40"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 w-32"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 w-36"></div>
        </div>

        <div>
          <div className="h-5 bg-gray-300 rounded mb-2 w-20"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <div className="h-5 bg-gray-300 rounded mb-2 w-24"></div>
        <div className="h-4 bg-gray-300 rounded mb-1 w-32"></div>
        <div className="h-4 bg-gray-300 rounded w-48"></div>
      </div>
    </div>
  );
}
