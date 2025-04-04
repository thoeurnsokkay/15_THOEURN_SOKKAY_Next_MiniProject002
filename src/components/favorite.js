"use client"

// import { useState } from "react";
import { Star, MoreVertical } from "lucide-react";
// import { useState } from "react";

const FavoriteList = () => {
  const favorites = [
    { id: 1, name: "HRD Design", color: "red-500" },
    { id: 2, name: "Website Design", color: "blue-500" },
  ];

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center text-gray-500 font-semibold mb-2">
        <span>Favorite</span>
        <Star className="w-5 h-5 text-gray-400" />
      </div>

      {/* List Items */}
      {favorites.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 bg-${item.color} rounded-full`} />
            <span className="text-gray-700">{item.name}</span>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
