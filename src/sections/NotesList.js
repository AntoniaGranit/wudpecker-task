import SearchBar from "../components/SearchBar";
import NotesListItem from "../components/NotesListItem";

const NotesList = ({ data, selectedNote, setSelectedNote, onCardClick }) => {
  return (
    <div className="flex flex-col h-full w-full gap-2">
      <div className="flex flex-col gap-5">
        <SearchBar />
        <h1 className="font-semibold text-2xl pl-7">Notes</h1>
      </div>
      <NotesListItem
        data={data}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        onCardClick={onCardClick}
      />
    </div>
  );
};

export default NotesList;
