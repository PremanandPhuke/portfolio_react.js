import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";

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
    <div className="bg-zinc-900 text-white min-h-[100vh] w-full">
      <Navbar/>
    </div>
  );
}

export default App;



