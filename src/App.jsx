import "./App.css";

import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => {
  return (
    <main className="">
      <div className="w-screen min-h-screen fixed flex justify-center p-[120px_24px_160px_24px] pointer-events-none main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
