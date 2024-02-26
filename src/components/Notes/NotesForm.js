import React, { useState } from "react";

function NotesForm({ onCreateNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteCategory, setNoteCategory] = useState("");

  const handleCreateNote = () => {
    // Basic validation, you can add more validation as needed
    if (noteTitle && noteContent && noteCategory) {
      const newNote = {
        title: noteTitle,
        content: noteContent,
        category: noteCategory,
      };
      onCreateNote(newNote);

      // Reset form fields after creating a note
      setNoteTitle("");
      setNoteContent("");
      setNoteCategory("");
    } else {
      alert("Please fill in all fields before creating a note.");
    }
  };

  return (
    <div className="max-w-sm bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Create a New Note</h3>

        <label htmlFor="noteTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          id="noteTitle"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <label htmlFor="noteContent" className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          id="noteContent"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>

        <label htmlFor="noteCategory" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <input
          type="text"
          id="noteCategory"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
          value={noteCategory}
          onChange={(e) => setNoteCategory(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleCreateNote}
        >
          Create Note
        </button>
      </div>
    </div>
  );
}

export default NotesForm;
