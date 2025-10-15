import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-blue-500 text-white">
      <div className="navbar-left">
        <a href="/" className="logo" aria-label="Home">
          <img src="/vite.svg" alt="Vite logo" />
        </a>
      </div>

      <div
        className="navbar-center border rounded-[40px] text-base border-(--glass-border) p-[8px] font-semibold shadow-2xl/20 inset-shadow-sm inset-shadow-current/15 backdrop-blur-sm bg-(--glass-bg) inset-shadow-sm text-white w-fit"
        style={{ ['--bg' as any]: 'color-mix(in oklab, black 20%, transparent)' }}
      >
        <ul className="nav-links flex items-center gap-6">
          <li className='font-semibold rounded-[30px] border border-(--glass-border) px-[30px] py-[12px] font-semibold shadow-2xl/20 inset-shadow-sm inset-shadow-current/15 backdrop-blur-sm bg-(--glass-bg) inset-shadow-sm text-white w-fit'>Home</li>
          <li><a href="#about" className="nav-link">About Me</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Resume</a></li>
        </ul>
      </div>

        <div className="navbar-right">
            <div className="p-[0.5px] rounded-[40px] bg-[radial-gradient(circle_at_center,_#FCFCFC_0%,_#CFCFCF_100%)]">
                <div className="px-[30px] py-[12  px] rounded-[40px] bg-[radial-gradient(circle_at_50%_150%,_#D8EAFF_0%,_#3995FF_100%)]">
                <a href="#contact" className="text-white font-semibold">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;