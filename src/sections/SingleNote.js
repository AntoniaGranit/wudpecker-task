import recipes from "../assets/NoteVectors/recipes.png";
import books from "../assets/NoteVectors/books.png";
import ideas from "../assets/NoteVectors/ideas.png";
import standard from "../assets/NoteVectors/standard.png";

const SingleNote = ({ selectedNote }) => {
  const hashtagImages = {
    "#recipes": recipes,
    "#books": books,
    "#ideas": ideas,
  };

  if (!selectedNote) {
    return (
      <div className="flex items-center justify-center flex-col h-full w-full">
        <h1 className="text-lighter-grey text-3xl font-semibold">
          No note selected
        </h1>
      </div>
    );
  }

  // Change the note's vector depending on which hashtags are used.
  let imageSrc = standard;
  for (const hashtag of selectedNote.hashtags) {
    if (hashtagImages[hashtag]) {
      imageSrc = hashtagImages[hashtag];
    }
  }

  return (
    <div className="flex flex-col h-full w-full items-center">
      <div className="flex flex-col gap-8 w-10/12 h-full overflow-y-auto no-scrollbar">
        <div className="flex justify-center">
          {imageSrc && <img className="h-[250px]" src={imageSrc} alt="Image" />}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{selectedNote.title}</h1>
          {selectedNote.hashtags.length > 0 && (
            <p className="text-sm text-darker-orange cursor-pointer">
              {selectedNote.hashtags.map((hashtag, hashtagIndex) => (
                <span key={hashtagIndex}>{hashtag} </span>
              ))}
            </p>
          )}
          <p className="text-sm text-light-grey">{selectedNote.description}</p>
          <h3 className="text-lg font-semibold">{selectedNote.subtitle}</h3>
          {selectedNote.todolist.length > 0 && (
            <ul className="flex flex-wrap w-4/5 gap-y-3">
              {selectedNote.todolist.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xxs w-1/2 text-zinc-800"
                >
                  {/* Added a read-only checkbox */}
                  <input
                    type="checkbox"
                    className="mr-2 accent-primary-orange"
                    checked={item.checked}
                    readOnly
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
