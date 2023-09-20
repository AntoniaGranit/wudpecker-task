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

const MenuItem = () => {
  const MainLinks = [
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
  ];

  const WorkspaceLinks = [
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
  ];

  const Menus = [MainLinks, WorkspaceLinks];

  return Menus.map((menu, menuIndex) => (
    <div className="py-5 border-indigo-400" key={menuIndex}>
      {menu.map((item, itemIndex) => {
        const Icon = item.icon;
        return (
          <div
            key={itemIndex}
            className="flex h-auto gap-3 border-2 border-indigo-400"
          >
            <Icon className="h-5 w-5 inline-block" />
            <p className="text-xs inline-block">{item.title}</p>
          </div>
        );
      })}
    </div>
  ));

  //   return (
  //     <div>
  //       <ul>
  //         {MainLinks.map((item) => {
  //           const Icon = item.icon;
  //           return (
  //             <div className="flex h-auto gap-3 border-2 border-indigo-400">
  //               <Icon className="h-5 w-5 inline-block" />
  //               <p className="text-xs inline-block">{item.title}</p>
  //             </div>
  //           );
  //         })}
  //       </ul>
  //       <div>
  //         <ul>
  //           {WorkspaceLinks.map((item) => {
  //             const Icon = item.icon;
  //             return (
  //               <div className="flex h-auto gap-3 border-2 border-indigo-400">
  //                 <Icon className="h-5 w-5 inline-block" />
  //                 <p className="text-xs inline-block">{item.title}</p>
  //               </div>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   );
};

export default MenuItem;
