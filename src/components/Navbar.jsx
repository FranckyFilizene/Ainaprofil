import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#412D15] bg-[#000000]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#about"
          className="text-2xl font-bold tracking-wide text-[#E1DCC9]"
        >
          RJ<span className="text-[#412D15]">Aina</span>
        </a>

        {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#E1DCC9] md:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <FiX  size={24}/> : <FiMenu size={24}/>}
          </button>

        {isOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-[#412D15] bg-[#1F150C] md:hidden">
          <div className="flex flex-col px-6 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#412D15] py-4 text-[#E1DCC9] transition-colors duration-300 last:border-b-0 hover:text-[#412D15]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        )}

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#E1DCC9] transition-colors duration-300 hover:text-[#412D15]"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;