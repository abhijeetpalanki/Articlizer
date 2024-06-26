const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex justify-center items-center">
          <img
            src="/logo-nobg.png"
            alt="logo"
            className="w-28 h-28 object-contain"
          />
          <span className="text-4xl font-bold">Articlizer</span>
        </div>

        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/abhijeetpalanki/Articlizer");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Articlizer, an open-source article summarizer
        that transforms lengthy articles into clear and consise summaries
      </h2>
    </header>
  );
};

export default Hero;
