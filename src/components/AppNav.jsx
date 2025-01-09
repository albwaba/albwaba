import { useClerk, UserButton } from "@clerk/clerk-react";
import { Form, Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";
import { MdNotifications } from "react-icons/md";
import { animated, useSpring } from "@react-spring/web";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useAdmin } from "../contexts/Admin";

import SearchBar from "./SearchBar";
import { usePosts } from "../contexts/PostsContext";
export default function AppNav() {
  const [openNav, setOpenNav] = useState(false);
  const { isAdmin } = useAdmin();
  const { user } = useClerk();
  const { notSeenNotifications } = usePosts();

  const props = useSpring({ x: openNav ? "0" : "-20rem" });
  const onclick = () => setOpenNav(false);
  return (
    <>
      <nav className="bg-primary sticky  top-0 z-[2222]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between ">
            <ul className="max-md:hidden flex items-center justify-between gap-3">
              <li>
                <NavLink to="/home">الرئيسيه</NavLink>
              </li>
              <li>
                <NavLink to="/form">نشر اعلان</NavLink>
              </li>
              <li>
                <NavLink to="/my-posts?state=approvedPosts">إعلاناتي</NavLink>
              </li>
              <li>
                <NavLink to="/saved">المفضله</NavLink>
              </li>
              <li>
                <NavLink to="/search">بحث متقدم</NavLink>
              </li>
              {isAdmin && (
                <li>
                  <NavLink to="/admin">admin</NavLink>
                </li>
              )}
            </ul>
            <button onClick={() => setOpenNav((o) => !o)} className="md:hidden">
              {openNav ? (
                <AiOutlineClose size="2rem" />
              ) : (
                <CgMenuLeftAlt size="2rem" />
              )}
            </button>
            <div className="flex justify-between items-center gap-3">
              <SearchBar />
              <NavLink className="relative" to={`/notifications`}>
                <MdNotifications size={25} className="text-text" />
                {notSeenNotifications > 0 ? (
                  <span className=" absolute top-[-10px] right-[-5px] w-5 h-5 flex items-center justify-center bg-[#f45353] rounded-full text-text">
                    {notSeenNotifications}
                  </span>
                ) : (
                  <></>
                )}
              </NavLink>
              <UserButton />
            </div>
          </div>
        </div>
      </nav>
      <animated.div
        className="fixed h-full p-5 bg-accent w-56 md:hidden z-[2222]"
        style={props}
      >
        {openNav && <MobileNav onclick={onclick} />}
      </animated.div>
      <div
        onClick={onclick}
        className={`${"fixed inset-0 backdrop-blur-sm bg-[#0f172acc] -z-10 transition-opacity opacity-0"} ${
          openNav && "opacity-100 !z-[1111]"
        }`}
      ></div>
    </>
  );
}
