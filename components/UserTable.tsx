'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MoreHorizontal, Edit, Trash2, Search, Filter } from 'lucide-react';

const usersData = [
  { id: 1, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/seed/u1/100/100' },
  { id: 2, name: 'Courtney Henry', email: 'courtney.henry@example.com', role: 'Member', status: 'Active', avatar: 'https://picsum.photos/seed/u2/100/100' },
  { id: 3, name: 'Tom Cook', email: 'tom.cook@example.com', role: 'Member', status: 'Active', avatar: 'https://picsum.photos/seed/u3/100/100' },
  { id: 4, name: 'Whitney Francis', email: 'whitney.francis@example.com', role: 'Editor', status: 'Offline', avatar: 'https://picsum.photos/seed/u4/100/100' },
  { id: 5, name: 'Leonard Krasner', email: 'leonard.krasner@example.com', role: 'Owner', status: 'Active', avatar: 'https://picsum.photos/seed/u5/100/100' },
  { id: 6, name: 'Floyd Miles', email: 'floyd.miles@example.com', role: 'Member', status: 'Offline', avatar: 'https://picsum.photos/seed/u6/100/100' },
];

export function UserTable() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mt-6">
      <div className="p-4 sm:p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative max-w-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer">
            Add User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-[13px]">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-500 border-b border-gray-200">
                Name
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-500 border-b border-gray-200">
                Role
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-500 border-b border-gray-200">
                Status
              </th>
              <th scope="col" className="relative px-4 py-3 border-b border-gray-200">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 flex-shrink-0 relative overflow-hidden rounded-full bg-gray-200 flex items-center justify-center font-semibold text-xs text-gray-500">
                      <Image className="object-cover" src={user.avatar} alt={user.name} fill referrerPolicy="no-referrer" />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-gray-500 text-xs">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-gray-900">{user.role}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-0.5 inline-flex text-[11px] leading-5 font-medium rounded-full ${
                    user.status === 'Active' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEF9C3] text-[#854D0E]'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right font-medium">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-blue-600 hover:text-blue-900 transition-colors">
                      <Edit className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button 
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredUsers.length === 0 && (
          <div className="text-center py-10 px-4">
            <p className="text-sm text-gray-500">No users found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
