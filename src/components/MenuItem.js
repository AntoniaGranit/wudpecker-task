import {
  ArrowDownTrayIcon,
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

const MenuItem = () => {
  const MainLinks = {
    title: null,
    items: [
      {
        id: 1,
        icon: Square2StackIcon,
        title: "Templates",
      },
      {
        id: 2,
        icon: ArrowDownTrayIcon,
        title: "Import",
      },
      {
        id: 3,
        icon: TrashIcon,
        title: "Trash",
      },
    ],
  };

  const WorkspaceLinks = {
    title: "Workspace",
    items: [
      {
        id: 1,
        icon: DocumentIcon,
        title: "Notes",
      },
      {
        id: 2,
        icon: HashtagIcon,
        title: "Tasks",
      },
      {
        id: 3,
        icon: MegaphoneIcon,
        title: "Announcements",
      },
      {
        id: 4,
        icon: MusicalNoteIcon,
        title: "Music",
      },
      {
        id: 5,
        icon: QuestionMarkCircleIcon,
        title: "Questions",
      },
      {
        id: 6,
        icon: CogIcon,
        title: "Dashboard",
      },
      {
        id: 7,
        icon: CodeBracketIcon,
        title: "Development",
      },
      {
        id: 8,
        icon: CogIcon,
        title: "Swift",
      },
    ],
  };

  const Menus = [MainLinks, WorkspaceLinks];

  return Menus.map((menu, menuIndex) => (
    <div className="py-2" key={menuIndex}>
      {menu.title ? (
        <p className="text-xs text-lightgrey pb-5">
          {menu.title.toUpperCase()}
        </p>
      ) : null}
      {menu.items.map((item, itemIndex) => {
        const Icon = item.icon;
        return (
          <div
            key={itemIndex}
            className="group cursor-pointer flex h-9 gap-4 transition-transform duration-500 ease-in-out hover:translate-x-2"
          >
            <Icon className="h-4 w-4 inline-block" />
            <p className="text-xxs inline-block">{item.title}</p>
          </div>
        );
      })}
    </div>
  ));
};

export default MenuItem;
