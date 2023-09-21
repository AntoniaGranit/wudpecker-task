import data from "../data/Notes.json";

const NotesListItem = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-52 gap-3 overflow-y-auto">
      {data.map((note, index) => (
        <div
          key={index}
          className="bg-primary-orange cursor-pointer flex flex-col justify-between p-5 rounded-2xl w-11/12 min-h-[120px]"
        >
          <p className="text-white text-xs font-bold">{note.title}</p>
          <div>
            {note.hashtags.length > 0 && (
              <p className="text-white text-xs">
                {note.hashtags.map((hashtag, hashtagIndex) => (
                  <span key={hashtagIndex}>{hashtag} </span>
                ))}
              </p>
            )}
            <p className="text-white text-xs">
              {note.description.length > 50
                ? note.description.slice(0, 42) + "..."
                : note.description}
            </p>
          </div>
          <p className="text-white text-xs">{note.added}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesListItem;
