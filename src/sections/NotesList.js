import SearchBar from "../components/SearchBar";
import NotesListItem from "../components/NotesListItem";

const NotesList = () => {
  return (
    <div className="flex flex-col h-full w-2/5 gap-2">
      <div className="flex flex-col gap-7">
        <SearchBar />
        <h1 className="font-semibold text-2xl pl-7">Notes</h1>
      </div>
      <NotesListItem />
    </div>
  );
};

export default NotesList;
