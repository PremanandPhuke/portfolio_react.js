import React, { useState, useEffect } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Home Section */}
      <div className="h-screen flex items-center justify-center relative">
        <div
          className={`absolute flex transition-all duration-1000 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Left Side (PORT) */}
          <h1
            className={`text-[10vw] font-bold transform transition-transform duration-1000 ${
              scrolled ? "-translate-x-[100%]" : "translate-x-0"
            }`}
          >
            PORT
          </h1>
          {/* Right Side (FOLIO) */}
          <h1
            className={`text-[10vw] font-bold transform transition-transform duration-1000 ${
              scrolled ? "translate-x-[100%]" : "translate-x-0"
            }`}
          >
            FOLIO
          </h1>
        </div>

        {/* Next Section Background */}
        <div
          className={`absolute w-full h-full bg-gray-800 z-[-1] transition-transform duration-1000 ${
            scrolled ? "translate-y-0" : "-translate-y-full"
          }`}
        ></div>
      </div>

      {/* Content Section */}
      <section
        className={`h-screen bg-gray-800 flex items-center justify-center transition-transform duration-1000 ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
          <p className="text-lg mt-4">
            Discover projects, skills, and more in this portfolio.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;



