import classNames from "classnames";
import { useState } from "preact/hooks";
import DarkModeSwitch from "./DarkModeSwitch";

type NavLinkProp = {
  href: string;
  label: string;
  active?: boolean;
};

function NavLink({ label, href, active }: NavLinkProp) {
  return <a href={href}>{label}</a>;
}

export default function Navbar({ navLinks, isBlog }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClasses = "items-center gap-8 uppercase tracking-widest text-xs";
  return (
    <nav className="w-full fixed z-50 bg-black md:py-4 h-14">
      <div className="container mx-auto px-4 sm:px-12 2xl:px-0 max-w-6xl flex flex-wrap items-center justify-between h-full">
        <a href="/" class="flex items-center w-20"></a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* desktop */}
        <div className={classNames("hidden md:flex", linkClasses)}>
          {navLinks.map((page) => (
            <NavLink href={page.url} label={page.label} active={page.active} />
          ))}
          {isBlog && <DarkModeSwitch />}
        </div>

        {/* mobile */}
        <div
          className={classNames(
            "flex w-full flex-col md:hidden overflow-hidden transition-all",
            linkClasses,
            {
              "max-h-0": !isMenuOpen,
              "max-h-screen py-2": isMenuOpen,
            }
          )}
        >
          {navLinks.map((page) => (
            <NavLink href={page.url} label={page.label} active={page.active} />
          ))}
          {isBlog && <DarkModeSwitch />}
        </div>
      </div>
    </nav>
  );
}
