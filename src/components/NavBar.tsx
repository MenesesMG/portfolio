import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CtaButtonBlue from './ctaButtonBlue';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/aboutme" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" } // Will redirect to LinkedIn
  ];

  const activeIndex = navItems.findIndex(item => item.path === location.pathname);

  const textColor = 'text-white/70';
  const activeBg = 'bg-white/20 text-white border border-white/20';
  const hoverBg = 'hover:bg-white/5 hover:text-white';
  const pillBg = 'bg-black/50 border border-white/10';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 md:py-10 py-4">
      
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center">
        <div className="navbar-left z-10">
          <Link to="/" aria-label="Home" className="flex items-center gap-2">
            <h1 className="font-bold text-3xl flex flex-col items-center transition-colors duration-300 text-gray-300">
              Portfolio
              <p className="font-thin text-[12px] pb-[5px]">by Marcelo</p>
            </h1>
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <div className={`relative flex items-center justify-center rounded-full p-[5px] backdrop-blur-xl transition-all duration-300 ${pillBg}`}>
            <ul className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative rounded-full">
                  {item.name === "Resume" ? (
                    <a
                      href="https://www.linkedin.com/in/menesesmg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-6 py-3 rounded-full font-medium cursor-pointer transition-all duration-300 ${textColor} ${hoverBg}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-6 py-3 rounded-full font-medium cursor-pointer transition-all duration-300
                        ${activeIndex === index ? activeBg : `${textColor} ${hoverBg}`}`}
                    >
                      {item.name}
                      {activeIndex === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/0 to-transparent pointer-events-none"></div>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-50 pointer-events-none blur-sm"></div>
          </div>
        </div>

        <div className="navbar-right ml-auto z-10">
          <CtaButtonBlue text="Contact" />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-300">
              Portfolio <span className="text-sm font-normal text-white/70">By Marcelo</span>
            </h1>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-20 flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} bg-gray-300`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} bg-gray-300`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} bg-gray-300`}></span>
          </button>
        </div>

        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className={`rounded-3xl p-4 backdrop-blur-xl border ${pillBg}`}>
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative rounded-2xl">
                  {item.name === "Resume" ? (
                    <a
                      href="https://www.linkedin.com/in/menesesmg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 rounded-2xl font-medium cursor-pointer ${textColor} ${hoverBg}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 rounded-2xl font-medium cursor-pointer
                        ${activeIndex === index ? activeBg : `${textColor} ${hoverBg}`}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
