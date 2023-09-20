import Logo from "../assets/logo.png";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col h-full w-1/5">
      <div className="flex justify-between items-center w-3/5 pb-4">
        <img src={Logo} alt="logo" className="h-6 w-7" />
        <div className="flex gap-1">
          <p className="text-sm font-semibold">Antonia</p>
          <ChevronUpDownIcon className="h-5 w-5 text-slate-400" />
        </div>
      </div>
      <nav className="flex flex-col h-full">
        <MenuItem />
        <span class="flex-grow"></span>
        <div className="flex items-center gap-4">
          <PlusCircleIcon className="h-4 w-4 inline-block" />
          <p className="text-xxs inline-block">New Page</p>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
