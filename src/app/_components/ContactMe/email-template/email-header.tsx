import React from 'react';

interface EmailHeaderProps {
  logoUrl?: string;
  logoAlt?: string;
  companyName?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const EmailHeader: React.FC<EmailHeaderProps> = ({
  logoUrl,
  logoAlt = 'Logo',
  companyName = 'Your Company',
  backgroundColor = '#4f46e5',
  textColor = '#ffffff'
}) => {
  return (
    <div 
      className="py-8 px-10 text-center"
      style={{ backgroundColor: backgroundColor }}
    >
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt={logoAlt}
          className="max-h-12 h-auto"
        />
      ) : (
        <h1 
          className="m-0 text-2xl font-bold"
          style={{ color: textColor }}
        >
          {companyName}
        </h1>
      )}
    </div>
  );
};
