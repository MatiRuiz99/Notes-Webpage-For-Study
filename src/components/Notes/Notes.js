import React from "react";

//Template idea until I make a full notes maker
const content = "Content that can be edited";
const title = "Note Title";
const category = "Category";

function Notes() {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-md overflow-hidden ">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-700">{content}</p>
      </div>

      <div className="bg-gray-100 py-2 px-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{category}</span>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
}

export default Notes;
