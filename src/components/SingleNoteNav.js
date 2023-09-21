import {
  StarIcon,
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const SingleNoteNav = () => {
  return (
    <div className="flex items-center justify-between w-full pb-4">
      <div className="flex gap-5">
        <StarIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
        <ArrowDownTrayIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
      </div>
      <div className="flex gap-5">
        <p className="text-xxs text-gray-400">Updates</p>
        <p className="text-xxs text-gray-400">Share</p>
        <EllipsisHorizontalIcon className="h-4 w-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleNoteNav;
