import Man from "../assets/Portraits/Man.jpg";
import Woman1 from "../assets/Portraits/Woman1.jpg";
import Woman2 from "../assets/Portraits/Woman2.jpg";

const NotesListItem = ({
  data,
  selectedNote,
  setSelectedNote,
  onCardClick,
}) => {
  const friendImages = {
    Man,
    Woman1,
    Woman2,
  };

  return (
    <div className="flex flex-col items-center justify-center pt-44 gap-3 overflow-y-auto no-scrollbar">
      {data.map((note, index) => (
        <div
          key={index}
          className={`${
            selectedNote === note
              ? "bg-primary-orange text-white"
              : "bg-inactive-note text-light-grey"
          } custom-card-hover hover:bg-lighter-orange hover:text-white hover:transition-bg transition duration-300 ease-in-out cursor-pointer flex flex-col justify-between p-4 rounded-2xl w-11/12 min-h-[120px]`}
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
          <div className="flex justify-between">
            <p className="text-xxs">{note.added} ago</p>
            <div className="flex -space-x-1.5">
              {note.friends.map((friend, friendIndex) => (
                <img
                  key={friendIndex}
                  src={friendImages[friend]}
                  alt="Friend Portrait"
                  className="w-5 h-5 rounded-full ring-1 ring-white"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesListItem;
