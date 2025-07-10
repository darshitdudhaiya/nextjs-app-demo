import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

async function fetchUsers(): Promise<User[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function UsersList() {
  const users = await fetchUsers();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-1">@{user.username}</p>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-sm text-gray-500 mb-1">{user.address.city}</p>
          <p className="text-sm text-blue-600">{user.company.name}</p>
        </Link>
      ))}
    </div>
  );
}
