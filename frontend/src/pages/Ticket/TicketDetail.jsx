// /src/components/TicketDetail/TicketDetail.jsx
import React from 'react';
import {TicketHeader} from '../../components/TicketDetail/TicketHeader';
import  TicketDescription from '../../components/TicketDetail/TicketDescription';
import AttachmentList from '../../components/TicketDetail/AttachmentList';  // default import
import TicketChat from '../../components/TicketDetail/TicketChat';  // Corrected default import

const mockAttachments = [
  { id: '1', name: 'file070220243.pdf', type: 'pdf' },
  { id: '2', name: 'file070220244.pdf', type: 'pdf' },
  { id: '3', name: 'Image070220241.jpg', type: 'image' },
  { id: '4', name: 'Video070220415.mp4', type: 'video' },
];

const mockMessages = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
    },
    message: 'Impact on Work\nThis issue disrupts meetings, delays task completion, and affects my overall productivity.',
    timestamp: '5 hours ago',
  },
  {
    id: '2',
    user: {
      name: 'Rebecca Velazquez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces',
    },
    message: 'Check the System and Application logs in the Event Viewer for warnings or errors that coincide with the times the freezes occur.',
    timestamp: '2 hours ago',
  },
];

function TicketDetail() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Ticket Detail</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TicketHeader
              status="In Progress"
              createdBy="John Doe"
              createdDate="06 Feb 2024"
              priority="High"
            />
            
            <TicketDescription
              title="Laptop Issue"
              description="For the past week, my laptop has been experiencing intermittent freezing issues. The freezes occur randomly, approximately 3-4 times a day, and last about 30-40 seconds each time. During these freezes, the cursor becomes unresponsive, and I am unable to click on anything or use keyboard shortcuts. The issue usually resolves itself, but it significantly disrupts my work.

I first noticed the problem on February 1, 2024, while using Google Meet for a video conference. Since then, the issue has occurred during various tasks, including browsing with Chrome, using Microsoft Office applications, and even when the laptop is idle.

Error messages: No specific error messages have appeared, but the Task Manager (when accessible) shows a spike in CPU usage to 100% during these freezes."
            />
            
            <AttachmentList attachments={mockAttachments} />
          </div>
          
          <div className="lg:col-span-1">
            <TicketChat messages={mockMessages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;
