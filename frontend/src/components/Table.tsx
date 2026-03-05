import type { User } from "./AddUsers";

interface TableProps {
  users: User[]
  deleteUsers: (id: number) => Promise<void>
}

const Table = ({ users, deleteUsers }: TableProps) => {

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Delete
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>

                <td className="px-6 py-4 text-sm text-gray-700 cursor-pointer" 
                onClick={() => {
                  // @ts-ignore
                  deleteUsers(user.id)
                }}>{"❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;