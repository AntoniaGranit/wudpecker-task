import { useEffect } from "react";

const SingleNote = ({ selectedNote }) => {
  useEffect(() => {
    if (selectedNote) {
      console.log(
        "This is the SingleNote component's selected note:",
        selectedNote
      );
    }
  }, [selectedNote]);

  if (!selectedNote) {
    return (
      <div className="flex items-center justify-center flex-col h-full w-full">
        <h1 className="text-lighter-grey text-3xl font-semibold">
          No note selected
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
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
  );
};

export default SingleNote;
