import {
  StarIcon,
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import Man from "../assets/Portraits/Man.jpg";
import Woman1 from "../assets/Portraits/Woman1.jpg";
import Woman2 from "../assets/Portraits/Woman2.jpg";

const SingleNoteNav = ({ selectedNote }) => {
  const friendImages = {
    Man,
    Woman1,
    Woman2,
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-5">
        <StarIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
        <ArrowDownTrayIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-xxs text-gray-400 cursor-pointer">Updates</p>
        <p className="text-xxs text-gray-400 cursor-pointer">Share</p>
        <div className="w-12 flex justify-center m-0">
          <div className="flex -space-x-1.5 h-10 items-center">
            {selectedNote.friends.map((friend, friendIndex) => (
              <img
                key={friendIndex}
                src={friendImages[friend]}
                alt="Friend Portrait"
                className="w-5 h-5 rounded-full ring-1 ring-white cursor-pointer"
              />
            ))}
          </div>
        </div>
        <EllipsisHorizontalIcon className="h-4 w-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleNoteNav;
