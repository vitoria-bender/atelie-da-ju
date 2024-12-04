import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 fixed top-0 w-full z-50 py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        <div>
          <span className="text-white font-bold text-xl">ATELIÊ DA JU</span>
        </div>

      
        <button
          className="text-gray-300 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

    
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-gray-900 lg:static lg:block lg:w-auto`}
        >
          <ul className="lg:flex lg:space-x-6 text-gray-300">
            <li className="py-2 lg:py-0">
              <a href="#produtos" className="block px-4 hover:text-gray-100">
                Produtos
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a href="#Sobre" className="block px-4 hover:text-gray-100">
                Sobre
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a href="#Contatos" className="block px-4 hover:text-gray-100">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;