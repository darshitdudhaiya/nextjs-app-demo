import { Suspense } from "react";
import UsersList from "./UsersList";
import UsersLoading from "./loading";

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <Suspense fallback={<UsersLoading />}>
        <UsersList />
      </Suspense>
    </div>
  );
}
