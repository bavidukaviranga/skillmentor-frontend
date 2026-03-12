import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex gap-2 p-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-amber-400" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "text-amber-400" : "")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/sessions"
        className={({ isActive }) => (isActive ? "text-amber-400" : "")}
      >
        Sessions
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-amber-400" : "")}
      >
        Login
      </NavLink>
    </nav>
  );
}