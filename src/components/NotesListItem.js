const NotesListItem = () => {
  return (
    <div className="bg-primary-orange flex flex-col justify-between p-5 rounded-2xl  w-11/12 h-28">
      <p className="text-white text-xs font-semibold">
        Write down your ideas 💡
      </p>
      <p className="text-white text-xs">#ideas #to-do</p>
      <p className="text-white text-xs">1 min</p>
    </div>
  );
};

export default NotesListItem;
