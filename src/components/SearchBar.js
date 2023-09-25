import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-10/12">
        <MagnifyingGlassIcon className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          name="Search bar"
          placeholder="Search notes"
          className="pl-8 pr-8 text-center text-xs w-full h-10 border-1 border-lightgrey rounded-3xl focus:outline-none focus:border-gray-400 focus:bg-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
