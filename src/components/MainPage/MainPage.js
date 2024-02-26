import React from "react";
import Notes from "../Notes/Notes";
import NotesForm from "../Notes/NotesForm";

function MainPage() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-neutral-500 text-center ">
      <div>
      My attempt to make a notes website
      </div>
      <Notes/>
      <NotesForm/>
    </div>
  );
}

export default MainPage;
