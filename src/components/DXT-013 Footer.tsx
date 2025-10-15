import React from 'react';

const Footer: React.FC = () => {
  // Helper to prepend GitHub Pages repo base path
  const getImagePath = (path: string) => {
    if (path.startsWith('/portfolio/')) return path;
    if (path.startsWith('/')) return `/portfolio${path}`;
    return `/portfolio/${path}`;
  };

  return (
    <footer className="w-full">
      <div className="container mx-auto px-5 md:px-20 pt-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-gray-300 py-10 text-[#2C2478]">
          
          {/* Logo and info */}
          <div className="flex flex-col gap-2">
            <div className="logo">
              <img
                src={getImagePath('/Portfolio By MarceloVio.svg')}
                alt="Logo"
                className="w-auto h-8"
              />
            </div>
            <p>Portfolio by Marcelo</p>
            <p>© {new Date().getFullYear()}. All rights reserved.</p>
            <p>Made with React, TailwindCSS, and a lot of ☕</p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-2xl font-semibold">Pages</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#aboutme" className="hover:underline">About Me</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#resume" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-2xl font-semibold">Socials</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.behance.net/MenesesMG" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Behance
                </a>
              </li>
              <li>
                <a href="https://github.com/MenesesMG" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://vimeo.com/user179632114" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Vimeo
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/menesesmg/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
