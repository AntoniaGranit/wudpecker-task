import Menu from "./sections/Menu";
import NotesList from "./sections/NotesList";
import SingleNote from "./sections/SingleNote";

const App = () => {
  return (
    <main className="bg-gradient h-screen w-screen flex justify-center items-center">
      <div className="flex bg-white m-auto w-9/12 h-90 p-9 rounded-4xl shadow-3xl">
        <Menu />
        <NotesList />
        <SingleNote />
      </div>
    </main>
  );
};

export default App;
