import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const navLinks = [
     { to: "/team", label: "Team" },
     { to: "/vision", label: "Vision" },
     { to: "/events", label: "Events" },
     { to: "/resources", label: "Resources" },
     { to: "/sponsorship", label: "Sponsorship" },
     { to: "/join", label: "Join", highlight: true },
];

function Nav() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const closeMenu = () => {
          setIsMenuOpen(false);
     };

     return (
          <header id="header">
               <h1>
                    <Link to="/" onClick={closeMenu}>
                         Home
                    </Link>
               </h1>

               <button
                    type="button"
                    className="mobile-menu-button"
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    aria-label={
                         isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                    }
                    onClick={() => setIsMenuOpen((current) => !current)}
               >
                    <span></span>
                    <span></span>
                    <span></span>
               </button>

               <nav
                    id="primary-navigation"
                    className={`links ${isMenuOpen ? "mobile-open" : ""}`}
                    aria-label="Primary navigation"
               >
                    <ul>
                         {navLinks.map((link) => (
                              <li key={link.to}>
                                   <NavLink
                                        to={link.to}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                             [
                                                  "nav-link",
                                                  isActive ? "nav-link-active" : "",
                                                  link.highlight ? "nav-link-join" : "",
                                             ]
                                                  .filter(Boolean)
                                                  .join(" ")
                                        }
                                   >
                                        {link.label}
                                   </NavLink>
                              </li>
                         ))}
                    </ul>
               </nav>
          </header>
     );
}

export default Nav;