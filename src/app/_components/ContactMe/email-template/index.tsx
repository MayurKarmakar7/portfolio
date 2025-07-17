import React from "react";
import { EmailHeader } from "./email-header";
import { EmailLayout } from "./email-layout";

interface ContactEmailProps {
  userName: string;
  userEmail: string;
  userMessage: string;
  userPhone?: string;
  userCompany?: string;
  submittedAt?: string;
}

export const EmailTemplate: React.FC<ContactEmailProps> = ({
  userName,
  userEmail,
  userMessage,
  submittedAt = new Date().toLocaleDateString(),
}) => {
  return (
    <EmailLayout
      previewText={`New contact request from ${userName}`}
      backgroundColor="#f9fafb"
    >
      <EmailHeader
        companyName={`Contact request for Mayur Karmakar`}
        backgroundColor="#111827"
        textColor="#f9fafb"
      />

      <div className="p-10">
        <div className="bg-emerald-800 text-white p-5 rounded-lg mb-8 text-center">
          <h2 className="m-0 mb-2 text-xl font-bold">
            💼 Professional Contact Request
          </h2>
          <p className="m-0 text-sm opacity-90">
            New business inquiry received on {submittedAt}
          </p>
        </div>

        <div className="grid gap-5 mb-8">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="m-0 mb-5 text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2">
              👤 Contact Information
            </h3>

            <table className="w-full border-spacing-0">
              <tr>
                <td className="py-2 pr-4 text-sm font-semibold text-gray-500 w-25">
                  Name:
                </td>
                <td className="py-2 text-base text-gray-900 font-medium">
                  {userName}
                </td>
              </tr>

              <tr>
                <td className="py-2 pr-4 text-sm font-semibold text-gray-500">
                  Email:
                </td>
                <td className="py-2 text-base">
                  <a
                    href={`mailto:${userEmail}`}
                    className="text-blue-600 no-underline font-medium"
                  >
                    {userEmail}
                  </a>
                </td>
              </tr>
            </table>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="m-0 mb-5 text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2">
              💬 Message Content
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-5 text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
              {userMessage}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h4 className="m-0 mb-4 text-base font-semibold text-blue-800">
            Quick Actions
          </h4>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`mailto:${userEmail}?subject=Re: Professional Inquiry&body=Dear ${userName},%0D%0A%0D%0AThank you for your interest! I'd be happy to discuss this opportunity further.%0D%0A%0D%0ABest regards`}
              className="inline-block bg-blue-600 text-white py-3 px-5 rounded-md no-underline text-sm font-semibold"
            >
              📧 Reply via Email
            </a>
          </div>
        </div>
      </div>
    </EmailLayout>
  );
};
