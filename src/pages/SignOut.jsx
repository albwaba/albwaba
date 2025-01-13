import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Hero from "../components/signOut/Hero";
import Stats from "../components/signOut/Stats";
import Features from "../components/signOut/Features";
import ContactUs from "../components/signOut/ContactUs";

import Loading from "../components/Loading";

export default function SignOut() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <header>
        <div className=" mx-auto flex h-16 max-w-screen-xl justify-between items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="#">
            <div className="w-16 h-16">
              <img src="implementation.png" alt="logo" />
            </div>
          </a>
          {theme === "light" ? (
            <FaSun className=" text-text" onClick={() => setTheme("dark")} />
          ) : (
            <FaMoon className=" text-text" onClick={() => setTheme("light")} />
          )}
        </div>
      </header>

      <Hero />
      <Features />
      <Stats />
      <ContactUs />
    </>
  );
}
