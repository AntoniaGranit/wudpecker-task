const NotesListItem = ({
  data,
  selectedNote,
  setSelectedNote,
  onCardClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-52 gap-3 overflow-y-auto no-scrollbar">
      {data.map((note, index) => (
        <div
          key={index}
          className={`${
            selectedNote === note
              ? "bg-primary-orange text-white"
              : "bg-inactive-note text-light-grey"
          } cursor-pointer flex flex-col justify-between p-5 rounded-2xl w-11/12 min-h-[120px]`}
          onClick={() => {
            setSelectedNote(index);
            onCardClick(note);
          }}
        >
          <p
            className={`text-xs font-semibold ${
              selectedNote === note ? "text-white" : "text-black"
            }`}
          >
            {note.title}
          </p>
          <div>
            {note.hashtags.length > 0 && (
              <p className="text-xs">
                {note.hashtags.map((hashtag, hashtagIndex) => (
                  <span key={hashtagIndex}>{hashtag} </span>
                ))}
              </p>
            )}
            <p className="text-xs">
              {note.description.length > 50
                ? note.description.slice(0, 42) + "..."
                : note.description}
            </p>
          </div>
          <p className="text-xs">{note.added}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesListItem;
