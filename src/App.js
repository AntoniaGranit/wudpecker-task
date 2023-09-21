import { useState } from "react";
import Menu from "./sections/Menu";
import NotesList from "./sections/NotesList";
import SingleNote from "./sections/SingleNote";
import SingleNoteNav from "./components/SingleNoteNav";
import data from "./data/Notes.json";
import { PlusIcon } from "@heroicons/react/24/outline";

const App = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const onCardClick = (note) => {
    setSelectedNote(note);
  };

  return (
    <main className="bg-gradient h-screen w-screen flex justify-center items-center">
      <div className="flex bg-white m-auto w-9/12 h-90 p-9 rounded-4xl shadow-3xl">
        <div className="flex w-1/5">
          <Menu />
        </div>
        <div className="flex w-2/5">
          <NotesList
            data={data}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            onCardClick={onCardClick}
          />
        </div>
        <div className="flex flex-col w-3/5 relative">
          <SingleNoteNav selectedNote={selectedNote} />
          <SingleNote selectedNote={selectedNote} />
          <div className="flex gap-4 absolute bottom-0 right-0">
            <div className="flex items-center justify-center bg-lightest-grey rounded-full h-10 w-10 cursor-pointer">
              <PlusIcon className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-center bg-lightest-grey rounded-full h-10 w-10 cursor-pointer">
              <p className="text-l">Aa</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
