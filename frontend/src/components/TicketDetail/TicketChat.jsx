// /src/components/TicketDetail/TicketChat.jsx
import React from 'react';
import { Send, Image } from 'lucide-react';

function TicketChat({ messages }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-semibold mb-4">Ticket Chat</h3>
      
      <div className="space-y-4 mb-4">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-3">
            <img
              src={message.user.avatar}
              alt={message.user.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{message.user.name}</span>
                <span className="text-sm text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-gray-700">{message.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex gap-2">
          <textarea
            className="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            rows={3}
          />
        </div>
        <div className="flex justify-between mt-2">
          <button className="text-gray-500 hover:text-gray-700">
            <Image className="w-5 h-5" />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketChat;  // default export
