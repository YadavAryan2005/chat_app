import { Info, Image, Send, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';

interface User {
  id: number;
  name: string;
  status: string;
  avatar: string;
}

interface ChatAreaProps {
  selectedUser: User;
  onShowProfile: () => void;
}

const messages = [
  {
    id: 1,
    text: 'Lorem ipsum is placeholder text commonly used in...',
    time: '2:46 PM',
    sender: 'other',
  },
  {
    id: 2,
    text: 'Lorem ipsum is placeholder text commonly used in...',
    time: '4:30 PM',
    sender: 'me',
  },
  {
    id: 3,
    text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
    time: '5:00 PM',
    sender: 'other',
  },
  {
    id: 4,
    text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
    time: '5:30 PM',
    sender: 'me',
  },
];

export default function ChatArea({ selectedUser, onShowProfile }: ChatAreaProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden" onClick={() => setShowSidebar(false)} />
      )}
      <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-slate-900/50 to-gray-900/50 z-40 lg:hidden transform transition-transform" style={{ transform: showSidebar ? 'translateX(0)' : 'translateX(-100%)' }}>
        <Sidebar selectedUser={selectedUser} onSelectUser={() => setShowSidebar(false)} />
      </div>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-900/30 via-blue-900/10 to-purple-900/20">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-white/5 flex items-center justify-between backdrop-blur-sm bg-slate-900/30 gap-4">
        <button className="lg:hidden p-2" onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <div className="relative flex-shrink-0">
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover ring-2 ring-white/10"
            />
            <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div className="min-w-0">
            <h2 className="text-base sm:text-lg font-semibold text-white truncate">{selectedUser.name}</h2>
            <p className="text-xs sm:text-sm text-green-400">{selectedUser.status}</p>
          </div>
        </div>

        <button className="hidden md:flex w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0" onClick={onShowProfile}>
          <Info className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} items-end gap-3`}
          >
            {message.sender === 'other' && (
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover ring-1 ring-white/10 flex-shrink-0"
              />
            )}

            <div className={`max-w-xs sm:max-w-md ${message.sender === 'me' ? 'order-first' : ''}`}>
              <div
                className={`px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base ${
                  message.sender === 'me'
                    ? 'bg-gradient-to-br from-purple-600/80 to-blue-600/80 backdrop-blur-sm'
                    : 'bg-slate-800/50 backdrop-blur-sm'
                } text-white`}
              >
                {message.text}
              </div>
              <div className={`text-xs text-gray-500 mt-2 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                {message.time}
              </div>
            </div>

            {message.sender === 'me' && (
              <img
                src="https://i.pravatar.cc/150?img=10"
                alt="Me"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover ring-1 ring-white/10 flex-shrink-0"
              />
            )}
          </div>
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-white/5 backdrop-blur-sm bg-slate-900/30">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Send a message"
              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors pr-12 sm:pr-14"
            />
            <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0">
              <Image className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
            </button>
          </div>

          <button className="w-11 sm:w-14 h-11 sm:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30 flex-shrink-0">
            <Send className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
