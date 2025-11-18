import { Search, MessageSquare } from 'lucide-react';

interface User {
  id: number;
  name: string;
  status: string;
  avatar: string;
  unread?: number;
}

interface SidebarProps {
  selectedUser: User;
  onSelectUser: (user: User) => void;
}

const users: User[] = [
  { id: 1, name: 'Caroline Gray', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Matthew Walker', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=2', unread: 4 },
  { id: 3, name: 'Carmen Jacobson', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Presley Martin', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=4', unread: 2 },
  { id: 5, name: 'Alexander Wilson', status: 'Offline', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'Samuel White', status: 'Offline', avatar: 'https://i.pravatar.cc/150?img=6' },
];

export default function Sidebar({ selectedUser, onSelectUser }: SidebarProps) {
  return (
    <div className="w-full lg:w-80 bg-gradient-to-b from-slate-900/50 to-gray-900/50 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
      <div className="p-4 sm:p-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">QuickChat</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onSelectUser(user)}
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:bg-white/5 transition-all ${
              selectedUser.id === user.id ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover ring-2 ring-white/10"
              />
              {user.status === 'Online' && (
                <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
              )}
            </div>

            <div className="flex-1 text-left min-w-0">
              <div className="font-semibold text-white text-sm sm:text-base truncate">{user.name}</div>
              <div className={`text-xs sm:text-sm ${user.status === 'Online' ? 'text-green-400' : 'text-gray-500'}`}>
                {user.status}
              </div>
            </div>

            {user.unread && (
              <div className="w-6 sm:w-7 h-6 sm:h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {user.unread}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
