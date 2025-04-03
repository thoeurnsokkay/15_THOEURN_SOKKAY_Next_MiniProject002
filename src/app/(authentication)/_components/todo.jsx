"use client"


export default function TodoComponent(){
    return (
        <>
             <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl border border-gray-200">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <h2 className="font-bold text-lg">ReactJS Homework 003</h2>
        <IoEllipsisVertical className="text-gray-500 cursor-pointer" />
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-1">
        Add a field in the portal to let the user connect their Slack account.
      </p>

      {/* Tag */}
      <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mt-2">
        Web Homework
      </span>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Status Dropdown */}
        <button className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          In Progress
          <span className="ml-1">▼</span>
        </button>

        {/* Date & Icon */}
        <div className="flex items-center text-gray-500 text-sm">
          <IoTimeOutline className="mr-1" />
          <span>Mar 24, 2025</span>
        </div>
      </div>
    </div>
        </>
    )
}