import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/team", label: "Team" },
  { to: "/vision", label: "Vision" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-gold">CSUN</span>
          <span>&bull; NSBE</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gold border-b-2 border-gold pb-1"
                      : "text-white/90 hover:text-gold transition-colors pb-1"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/sponsorship"
                className="rounded bg-maroon px-4 py-2 font-semibold hover:bg-maroon-light transition-colors"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex flex-col justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 text-gold"
                      : "block py-2 text-white/90 hover:text-gold transition-colors"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/sponsorship"
                onClick={() => setMenuOpen(false)}
                className="block rounded bg-maroon px-4 py-2 text-center font-semibold hover:bg-maroon-light transition-colors"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Nav;