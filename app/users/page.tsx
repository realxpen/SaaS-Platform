import { UserTable } from '@/components/UserTable';

export default function UsersPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">User Management</h1>
          <p className="text-gray-500">View and manage users, roles, and permissions.</p>
        </div>
      </div>
      <UserTable />
    </div>
  );
}
