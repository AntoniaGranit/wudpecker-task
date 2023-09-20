import Menu from "./components/Menu";

const App = () => {
  return (
    <main className="bg-gradient h-screen w-screen flex justify-center items-center">
      <div className="bg-white m-auto w-9/12 h-90 p-9 rounded-4xl shadow-3xl">
        <Menu />
      </div>
    </main>
  );
};

export default App;
