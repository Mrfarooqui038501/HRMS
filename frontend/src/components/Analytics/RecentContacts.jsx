import React from 'react';
import { User } from 'lucide-react';

const contacts = [
  {
    name: "Carol Thomas",
    role: "UI/UX Designer",
    email: "caroltho3@example.com",
    phone: "+1 12454785",
    createdAt: "12 Jan 2024,10:00 am"
  },
  {
    name: "Dawn Mercha",
    role: "Technician",
    email: "dawnmercha@example.com",
    phone: "+1 478845447",
    createdAt: "20 Jan 2024,12:20 pm"
  },
  {
    name: "Rachel Hampton",
    role: "Software Developer",
    email: "rachel@example.com",
    phone: "+1 216544845",
    createdAt: "15 Feb 2024,08:30 am"
  },
  {
    name: "Jonelle Curtiss",
    role: "Supervisor",
    email: "jonelle@example.com",
    phone: "+1 12114547",
    createdAt: "24 Feb 2024,11:00 am"
  },
  {
    name: "Jonathan",
    role: "Team Lead Dev",
    email: "jonathan@example.com",
    phone: "+1 321454789",
    createdAt: "10 Mar 2024,02:10 pm"
  }
];

export function RecentContacts() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          Recently Created Contacts
          <span className="text-gray-400">
            <User size={20} />
          </span>
        </h2>
        <select className="border rounded-md px-3 py-1.5 text-sm">
          <option>Last 30 days</option>
          <option>Last 60 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Contact</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Phone</th>
              <th className="text-left py-3 px-4">Created at</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <div>
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-gray-500">{contact.role}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600">{contact.email}</td>
                <td className="py-3 px-4 text-gray-600">{contact.phone}</td>
                <td className="py-3 px-4 text-gray-600">{contact.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
