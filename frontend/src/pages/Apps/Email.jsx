import React, { useState } from "react";
import { format } from "date-fns"; // For date formatting
import { Paperclip, Reply, Forward } from 'lucide-react'; // Corrected icons import

// Sample email data (You can replace this with actual data from an API)
const emailsData = [
  {
    id: 1,
    subject: "Meeting Reminder",
    sender: "john@example.com",
    date: "2024-11-25T08:30:00",
    preview: "Don't forget about the meeting at 3 PM today.",
    content: "This is a reminder for our meeting scheduled at 3 PM today. Please be prepared with your updates.",
  },
  {
    id: 2,
    subject: "Invoice for October",
    sender: "billing@company.com",
    date: "2024-11-24T10:00:00",
    preview: "Attached is the invoice for October. Please review.",
    content: "Please find attached the invoice for October. If you have any questions, feel free to contact us.",
  },
  {
    id: 3,
    subject: "Your Subscription",
    sender: "support@service.com",
    date: "2024-11-23T14:15:00",
    preview: "Your subscription will expire soon. Renew now!",
    content: "Your subscription is about to expire in 3 days. Click here to renew your subscription before it ends.",
  },
  // Add more emails as needed
];

const EmailPage = () => {
  const [selectedEmail, setSelectedEmail] = useState(null); // State to store selected email

  // Function to format the date
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM dd, yyyy hh:mm a");
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 mt-20">
      {/* Sidebar - Email Folders */}
      <div className="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-b from-blue-600 to-blue-500 text-white shadow-md">
          <h2 className="text-2xl font-semibold">Mail</h2>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li className="cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-all">Inbox</li>
            <li className="cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-all">Sent</li>
            <li className="cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-all">Drafts</li>
            <li className="cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-all">Spam</li>
            <li className="cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-all">Trash</li>
          </ul>
        </div>
      </div>

      {/* Main Email View */}
      <div className="flex-1 flex flex-col p-6">
        {/* Email List */}
        {!selectedEmail ? (
          <div className="flex-1 overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Inbox</h2>
              <div className="space-y-6">
                {emailsData.map((email) => (
                  <div
                    key={email.id}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer hover:bg-blue-50"
                    onClick={() => setSelectedEmail(email)} // Set email as selected
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-lg text-gray-800">{email.subject}</div>
                      <div className="text-sm text-gray-500">{formatDate(email.date)}</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">{email.preview}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Email Detail View
          <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <button
                onClick={() => setSelectedEmail(null)} // Reset to email list view
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Back to Inbox
              </button>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-gray-800">{selectedEmail.subject}</h2>
              <div className="mt-4 text-sm text-gray-500">
                <div>From: {selectedEmail.sender}</div>
                <div>Date: {formatDate(selectedEmail.date)}</div>
              </div>

              <div className="mt-6 text-lg text-gray-800">{selectedEmail.content}</div>

              {/* Attachment - Example */}
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Paperclip className="w-5 h-5" />
                  <span>Invoice_October.pdf</span>
                </div>
              </div>

              {/* Optional: Add Reply, Forward buttons */}
              <div className="mt-6 flex space-x-6">
                <button className="flex items-center space-x-2 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                  <Reply className="w-5 h-5" />
                  <span>Reply</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  <Forward className="w-5 h-5" />
                  <span>Forward</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPage;
