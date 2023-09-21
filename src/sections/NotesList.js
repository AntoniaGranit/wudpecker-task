import SearchBar from "../components/SearchBar";
import NotesListItem from "../components/NotesListItem";

const NotesList = () => {
  return (
    <div className="flex flex-col h-full w-2/5 gap-7">
      <div className="flex flex-col gap-7">
        <SearchBar />
        <h1 className="font-semibold text-2xl pl-7">Notes</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <NotesListItem />
      </div>
    </div>
  );
};

export default NotesList;
