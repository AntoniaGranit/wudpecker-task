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

  let imageSrc = standard;
  for (const hashtag of selectedNote.hashtags) {
    if (hashtagImages[hashtag]) {
      imageSrc = hashtagImages[hashtag];
      break; // Stop searching once a matching hashtag is found
    }
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center">
        {imageSrc && <img className="h-[250px]" src={imageSrc} alt="Image" />}
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{selectedNote.title}</h1>
        {selectedNote.hashtags.length > 0 && (
          <p className="text-sm text-darker-orange">
            {selectedNote.hashtags.map((hashtag, hashtagIndex) => (
              <span key={hashtagIndex}>{hashtag} </span>
            ))}
          </p>
        )}
        <p className="text-sm text-light-grey">{selectedNote.description}</p>
      </div>
    </div>
  );
};

export default SingleNote;
