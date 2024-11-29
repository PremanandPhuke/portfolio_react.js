// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
 

//   return (
//     <>
     
//     </>
//   )
// }

// export default App


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
        <h1
          className={`text-[10vw] font-bold absolute transition-all duration-1000 ${
            scrolled ? "transform -translate-x-[50vw] opacity-0" : ""
          }`}
        >
          PORT
        </h1>
        <h1
          className={`text-[10vw] font-bold absolute transition-all duration-1000 ${
            scrolled ? "transform translate-x-[50vw] opacity-0" : ""
          }`}
        >
          FOLIO
        </h1>
      </div>

      {/* Next Section */}
      <section
        className={`h-screen bg-gray-800 flex items-center justify-center transition-transform duration-1000 ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
          <p className="text-lg mt-4">This is the next section of the website.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
