export default function Loading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-700 rounded w-1/3" />
      <div className="h-4 bg-gray-600 rounded w-2/3" />
      <div className="h-4 bg-gray-500 rounded w-1/2" />
    </div>
  );
}
