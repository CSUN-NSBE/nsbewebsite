import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/team", label: "Team" },
  { to: "/vision", label: "Vision" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => (isActive ? "text-brand" : "text-ink/70 transition-colors hover:text-brand");

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 font-body">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-[4.5vw] py-5">
        <Link to="/" onClick={() => setOpen(false)} className="font-display text-lg font-semibold text-ink">CSUN <b className="text-brand">NSBE</b></Link>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation" className="text-sm text-ink/70 md:hidden">{open ? "Close" : "Menu"}</button>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>{link.label}</NavLink>
          ))}
        </nav>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-rule px-[4.5vw] py-3 text-sm md:hidden">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setOpen(false)} className={({ isActive }) => `block py-2 ${isActive ? "text-brand" : "text-ink/70"}`}>{link.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Nav;