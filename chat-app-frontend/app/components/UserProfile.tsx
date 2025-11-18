import { LogOut, X } from 'lucide-react';

interface User {
  id: number;
  name: string;
  status: string;
  avatar: string;
}

interface UserProfileProps {
  selectedUser: User;
  onHideProfile?: () => void;
}

const mediaItems = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function UserProfile({ selectedUser, onHideProfile }: UserProfileProps) {
  return (
    <div className="w-full md:w-96 bg-gradient-to-b from-slate-900/50 to-gray-900/50 backdrop-blur-sm border-t md:border-t-0 md:border-l border-white/5 flex flex-col">
      {onHideProfile && (
        <button
          onClick={onHideProfile}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>
      )}

      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 md:py-12 overflow-y-auto">
        <div className="relative mb-4 md:mb-6">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.name}
            className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full object-cover ring-4 ring-white/10 shadow-2xl"
          />
          <div className="absolute bottom-2 right-2 w-5 sm:w-6 md:w-6 h-5 sm:h-6 md:h-6 bg-green-500 rounded-full border-4 border-gray-900"></div>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2 text-center">{selectedUser.name}</h2>
        <p className="text-green-400 text-xs sm:text-sm md:text-sm mb-6 md:mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
          {selectedUser.status}
        </p>

        <p className="text-gray-400 text-center text-xs sm:text-sm md:text-sm leading-relaxed mb-6 md:mb-12">
          Lorem ipsum is placeholder text commonly used in...
        </p>

        <div className="w-full">
          <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Media</h3>
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden bg-slate-800/50 hover:scale-105 transition-transform cursor-pointer ring-1 ring-white/10 hover:ring-purple-500/50"
              >
                <img
                  src={item}
                  alt={`Media ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 border-t md:border-t-0 border-white/5">
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 sm:py-4 md:py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/30 text-sm md:text-base">
          <LogOut className="w-4 sm:w-5 h-4 sm:h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
