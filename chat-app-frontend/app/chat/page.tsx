"use client"
import Head from 'next/head';
import { useState } from 'react';

// Placeholder data (kept the same)
// ... (omitted for brevity, assume placeholder data remains)
const activeChat = {
  id: 'chat-1',
  name: "Caroline Gray",
  status: "Online",
  avatar: "/caroline-gray.jpg", 
  lastSeen: "Online", 
  media: [
    "/media-thumb-1.jpg", 
    "/media-thumb-2.jpg", 
    "/media-thumb-3.jpg", 
    "/media-thumb-4.jpg" 
  ]
};

const chatUsers = [
  { id: 'u1', name: 'Caroline Gray', status: 'Online', avatar: '/avatar-caroline.jpg' },
  { id: 'u2', name: 'Matthew Walker', status: 'Online', avatar: '/avatar-matthew.jpg' },
  { id: 'u3', name: 'Carmen Jacobson', status: 'Online', avatar: '/avatar-carmen.jpg' },
  { id: 'u4', name: 'Presley Martin', status: 'Online', avatar: '/avatar-presley.jpg', unread: 2 },
  { id: 'u5', name: 'Alexander Wilson', status: 'Offline', avatar: '/avatar-alex.jpg' },
  { id: 'u6', name: 'Samuel White', status: 'Offline', avatar: '/avatar-samuel.jpg' },
];

const messages = [
    { id: 'm1', sender: 'Caroline Gray', time: '2:40 PM', text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.' },
    { id: 'm2', sender: 'Me', time: '2:45 PM', text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.' },
    { id: 'm3', sender: 'Caroline Gray', time: '3:30 PM', text: 'Lorem ipsum is placeholder text commonly used in.' },
    { id: 'm4', sender: 'Me', time: '4:30 PM', text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.' },
    { id: 'm5', sender: 'Caroline Gray', time: '5:00 PM', text: 'Lorem ipsum is placeholder text commonly used in.' },
    { id: 'm6', sender: 'Me', time: '5:10 PM', text: 'Lorem ipsum is placeholder text commonly used in.' },
];


const GlassmorphicQuickChatUI = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [activeChatId, setActiveChatId] = useState('u4'); 

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      console.log('Sending message:', currentMessage);
      setCurrentMessage('');
    }
  };

  return (
    <>
      <Head>
        <title>QuickChat | Glass</title>
      </Head>

      {/* 1. Main Container: Fixed Background Image (The layer that gets blurred) */}
      <div 
        className="h-screen w-screen flex justify-center items-center p-8 text-white font-sans"
        style={{
          backgroundImage: "url('/deep-purple-abstract.jpg')", // Use a visually busy background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Key to seeing the blur effect clearly
        }}
      >
        {/* 2. Central App Window (Contained & Glassmorphic) */}
        <div 
          className="flex w-full max-w-7xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl" // Rounded-3xl and shadow-2xl for better frame
          style={{
            // The Glass Effect: High transparency with strong blur
            background: 'rgba(255, 255, 255, 0.05)', // Highly transparent white/light color
            backdropFilter: 'blur(25px) brightness(1.2)', // Stronger blur
            border: '1px solid rgba(255, 255, 255, 0.15)', // Visible border
          }}
        >

          {/* --- A. Left Sidebar (User List) --- */}
          {/* Note: Sidebar content background needs to be opaque or semi-transparent to read text easily */}
          <div className="w-[300px] flex flex-col bg-black/40 border-r border-white/10 shadow-lg">
            
            {/* Sidebar Header */}
            <div className="h-20 flex items-center px-6 bg-black/30">
              <span className="text-2xl font-bold text-white tracking-wide">
                <span className="text-fuchsia-400 mr-1">QuickChat</span>
              </span>
            </div>

            {/* Search Bar */}
            <div className="p-4 bg-black/30">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search here..."
                  className="w-full p-2.5 pl-10 bg-white/10 border border-fuchsia-500/50 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-150"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>

            {/* New Chat Button */}
            <div className="px-4 pb-4 bg-black/30">
                <button className="w-full py-2 bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-200 rounded-xl text-lg font-semibold shadow-lg">
                    New Chat
                </button>
            </div>

            {/* Chat List Container (Scrollable) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar"> 
              {chatUsers.map(user => (
                  <div 
                      key={user.id} 
                      onClick={() => setActiveChatId(user.id)}
                      className={`relative flex items-center p-3 my-2 mx-4 rounded-xl cursor-pointer transition duration-200 
                                  ${activeChatId === user.id ? 'bg-fuchsia-700 shadow-lg' : 'hover:bg-white/10'}`}
                  >
                      <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20"/>
                      <div className="ml-4 flex-1">
                          <h4 className="font-semibold text-lg">{user.name}</h4>
                          <p className={`text-sm ${user.status === 'Online' ? 'text-green-400' : 'text-gray-400'}`}>
                              {user.status}
                          </p>
                      </div>
                      {user.unread && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-fuchsia-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {user.unread}
                          </span>
                      )}
                  </div>
              ))}
            </div>
          </div>

          {/* --- B. Central Chat Window --- */}
          <div className="flex-1 flex flex-col bg-black/20 border-r border-white/10">
            
            {/* Chat Header */}
            <div className="h-20 flex items-center justify-between px-6 bg-black/30 border-b border-white/10 shadow-md">
              <div className="flex items-center space-x-4">
                <img src={activeChat.avatar} alt={activeChat.name} className="w-12 h-12 rounded-full object-cover border-2 border-fuchsia-400"/>
                <div>
                  <h3 className="text-xl font-bold">{activeChat.name}</h3>
                  <p className="text-sm text-green-400">{activeChat.status}</p>
                </div>
              </div>
              <button className="text-gray-300 hover:text-fuchsia-400 p-2 rounded-full transition duration-150">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>

            {/* Message Display Area (Main area where the blur is most visible) */}
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar"> 
                <div className="flex flex-col space-y-4">
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.sender !== 'Me' && (
                                <img src={msg.sender === 'Caroline Gray' ? activeChat.avatar : '/placeholder-avatar.jpg'} 
                                     alt={msg.sender} 
                                     className="w-8 h-8 rounded-full object-cover mr-3 self-end"
                                />
                            )}
                            <div className={`p-3 max-w-[70%] rounded-xl shadow-lg relative 
                                            ${msg.sender === 'Me' 
                                                ? 'bg-fuchsia-700/80 text-white rounded-br-none' // Semi-transparent sender bubble
                                                : 'bg-white/10 text-white rounded-bl-none'}`}>
                                <p className="text-sm">{msg.text}</p>
                                <span className={`text-xs mt-1 block ${msg.sender === 'Me' ? 'text-gray-200' : 'text-gray-400'} text-right`}>{msg.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Input Bar */}
            <div className="p-4 bg-black/30 border-t border-white/10 shadow-inner flex items-center space-x-4">
                <button className="text-gray-300 hover:text-fuchsia-400 p-2 rounded-full transition duration-150">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13.5"></path></svg>
                </button>
                <input 
                    type="text" 
                    placeholder="Send a message"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 p-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 shadow-inner focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"
                />
                <button onClick={handleSendMessage} className="p-3 bg-fuchsia-600 rounded-full text-white hover:bg-fuchsia-700 transition duration-150 shadow-lg shadow-fuchsia-500/30">
                    <svg className="w-6 h-6 transform rotate-45 -mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
            </div>
          </div>

          {/* --- C. Right Info Panel --- */}
          <div className="w-[300px] flex-shrink-0 flex flex-col bg-black/40 border-l border-white/10 shadow-lg">
            
            {/* Info Panel Header */}
            <div className="h-20 flex items-center justify-center px-6 bg-black/30 border-b border-white/10">
                <h3 className="text-xl font-bold">Contact Info</h3>
            </div>

            {/* Profile Summary */}
            <div className="flex flex-col items-center p-6 border-b border-white/10">
                <img src={activeChat.avatar} alt={activeChat.name} className="w-24 h-24 rounded-full object-cover border-4 border-fuchsia-400 shadow-lg"/>
                <h4 className="text-xl font-bold mt-4">{activeChat.name}</h4>
                <p className="text-sm text-green-400 flex items-center mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    {activeChat.lastSeen}
                </p>
                <p className="text-sm text-gray-400 text-center mt-2">Lorem ipsum is placeholder text commonly used in -</p>
            </div>

            {/* Media Section */}
            <div className="p-6 border-b border-white/10">
                <h5 className="text-lg font-bold mb-3">Media</h5>
                <div className="grid grid-cols-2 gap-3">
                    {activeChat.media.map((src, index) => (
                        <img key={index} src={src} alt={`Media ${index + 1}`} className="w-full h-24 object-cover rounded-lg shadow-md hover:scale-105 transition duration-200 cursor-pointer"/>
                    ))}
                </div>
            </div>

            {/* Logout Button */}
            <div className="p-6 mt-auto bg-black/20">
                <button className="w-full py-3 bg-fuchsia-700 hover:bg-fuchsia-800 transition duration-200 rounded-xl text-lg font-semibold shadow-lg">
                    Logout
                </button>
            </div>
          </div>

        </div>
      </div>

      {/* Tailwind CSS Custom Scrollbar (kept the same) */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.5); /* Purple-700 with transparency */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7); /* Purple-500 with transparency */
        }
      `}</style>
    </>
  );
};

export default GlassmorphicQuickChatUI;