interface GeneralContactTemplateProps {
  senderName: string
  senderEmail: string
  message: string
  
}

export default function ContactMeEmailTemplate({
  senderName,
  senderEmail,
  message
}: GeneralContactTemplateProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Contact request from {senderName}</h1>
            <p className="text-blue-100">From your portfolio website</p>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-8 py-8">
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold text-gray-900">{senderName}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href={`mailto:${senderEmail}`} className="font-semibold text-blue-600 hover:underline">
                  {senderEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Message</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{message}</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              <p>
                Time: <span className="font-medium">{new Date().toLocaleString()}</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs">mayurkarmakar.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
