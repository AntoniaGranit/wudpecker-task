import Logo from "../assets/logo.png";
import {
  ArrowDownTrayIcon,
  ChevronUpDownIcon,
  CodeBracketIcon,
  CogIcon,
  DocumentIcon,
  HashtagIcon,
  MegaphoneIcon,
  MusicalNoteIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Menu = () => {
  return (
    <div className="flex flex-col h-full w-1/5">
      <div className="flex justify-between w-3/5 pb-8">
        <img src={Logo} alt="logo" className="h-6 w-7" />
        <div className="flex gap-1">
          <p className="text-sm font-semibold">Antonia</p>
          <ChevronUpDownIcon className="h-5 w-5 text-slate-400" />
        </div>
      </div>
      <nav className="flex flex-col h-full gap-7">
        <div className="flex flex-col h-auto gap-3 border-2 border-indigo-400">
          <ul>
            <li>
              <Square2StackIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block">Templates</p>
            </li>
            <li>
              <ArrowDownTrayIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block">Imports</p>
            </li>
            <li>
              <TrashIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block">Trash</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col h-fit border-4 border-indigo-300">
          <p className="text-xs text-lightgrey pb-2">WORKSPACE</p>
          <ul>
            <li>
              <DocumentIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block">Notes</p>
            </li>
            <li>
              <HashtagIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">Tasks</p>
            </li>
            <li>
              <MegaphoneIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">
                Announcements
              </p>
            </li>
            <li>
              <MusicalNoteIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">Music</p>
            </li>
            <li>
              <QuestionMarkCircleIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">Questions</p>
            </li>
            <li>
              <CogIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">Dashboard</p>
            </li>
            <li>
              <CodeBracketIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">Development</p>
            </li>
            <li>
              <CogIcon className="h-5 w-5 inline-block" />
              <p className="text-xs inline-block text-lightgrey">Swift</p>
            </li>
          </ul>
        </div>
        <span class="flex-grow"></span>
        <div className="flex items-center">
          <PlusCircleIcon className="h-5 w-5 inline-block" />
          <p className="text-xs inline-block">New Page</p>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
