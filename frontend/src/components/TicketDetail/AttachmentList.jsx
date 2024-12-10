import React from 'react';
import { FileText, Image, Video, Download } from 'lucide-react';

const AttachmentList = ({ attachments }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'doc':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'image':
        return <Image className="w-5 h-5 text-pink-500" />;
      case 'video':
        return <Video className="w-5 h-5 text-purple-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {attachments.map((attachment) => (
        <div key={attachment.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            {getIcon(attachment.type)}
            <span className="text-sm text-gray-700">{attachment.name}</span>
          </div>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AttachmentList;  // default export
