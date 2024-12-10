import React from 'react';
import { Clock, User, AlertCircle } from 'lucide-react';

export function TicketHeader({ status, createdBy, createdDate, priority }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-500" />
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-medium">{status}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-600">Created By</p>
            <p className="font-medium">{createdBy}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-500" />
          <div>
            <p className="text-sm text-gray-600">Created Date</p>
            <p className="font-medium">{createdDate}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-purple-500" />
          <div>
            <p className="text-sm text-gray-600">Priority</p>
            <p className="font-medium text-red-500">{priority}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
