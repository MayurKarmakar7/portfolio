import React from 'react';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText?: string;
  backgroundColor?: string;
}

export const EmailLayout: React.FC<EmailLayoutProps> = ({ 
  children, 
  previewText,
  backgroundColor = '#f8f9fa'
}) => {
  return (
    <div 
      className="font-sans leading-relaxed text-gray-800 m-0 p-0 w-full"
      style={{ backgroundColor: backgroundColor }}
    >
      {previewText && (
        <div 
          className="hidden text-xs leading-none max-h-0 max-w-0 opacity-0 overflow-hidden"
          style={{ color: backgroundColor }}
        >
          {previewText}
        </div>
      )}
      
      <table 
        className="w-full py-5"
        style={{ backgroundColor: backgroundColor }}
      >
        <tr>
          <td className="text-center">
            <table className="max-w-2xl w-full bg-white rounded-lg shadow-md overflow-hidden mx-auto">
              <tr>
                <td>
                  {children}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};