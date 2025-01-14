import { SignOutButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { useAdmin } from "../contexts/Admin";
export default function MobileNav({ onclick }) {
  const { isAdmin } = useAdmin();

  return (
    <>
      <ul className=" space-y-6 text-right">
        <li>
          <NavLink onClick={onclick} to="/home">
            الرئيسيه
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onclick} to="/form">
            نشر اعلان
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onclick} to="/my-posts?state=approvedPosts">
            إعلاناتي
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onclick} to="/saved">
            المفضله
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onclick} to="/search">
            بحث متقدم
          </NavLink>
        </li>
        {isAdmin && (
          <li>
            <NavLink onClick={onclick} to="/admin">
              admin
            </NavLink>
          </li>
        )}
        <li>
          <SignOutButton>تسجيل الخروج</SignOutButton>
        </li>
      </ul>
    </>
  );
}
