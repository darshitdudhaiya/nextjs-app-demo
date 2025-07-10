interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}

async function fetchUser(id: string): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

interface Props {
  userId: string;
}

export default async function UserProfile({ userId }: Props) {
  const user = await fetchUser(userId);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <span className="text-gray-500">@{user.username}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-600 mb-1">📧 {user.email}</p>
          <p className="text-gray-600 mb-1">📞 {user.phone}</p>
          <p className="text-gray-600 mb-1">🌐 {user.website}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
            {user.address.suite} {user.address.street}
            <br />
            {user.address.city} {user.address.zipcode}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-2">Company</h3>
        <p className="font-medium">{user.company.name}</p>
        <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
}
