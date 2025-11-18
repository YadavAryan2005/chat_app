"use client"
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import UserProfile from './components/UserProfile';

function App() {
  const [selectedUser, setSelectedUser] = useState({
    id: 1,
    name: 'Caroline Gray',
    status: 'Online',
    avatar: 'https://i.pravatar.cc/150?img=1'
  });

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full h-[100vh] sm:h-[90vh] bg-black/40 backdrop-blur-xl rounded-none sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        <div className="hidden lg:flex flex-shrink-0">
          <Sidebar selectedUser={selectedUser} onSelectUser={setSelectedUser} />
        </div>
        <ChatArea
          selectedUser={selectedUser}
          onShowProfile={() => setShowProfile(true)}
        />
        {showProfile ? (
          <UserProfile
            selectedUser={selectedUser}
            onHideProfile={() => setShowProfile(false)}
          />
        ) : (
          <div className="hidden md:flex flex-shrink-0">
            <UserProfile
              selectedUser={selectedUser}
              onHideProfile={() => setShowProfile(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
