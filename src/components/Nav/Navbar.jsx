import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-100 py-4 shadow-md sticky top-0 z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center px-6 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to={routes.home}>
          <h1 className="text-2xl font-serif hover:opacity-80 text-purple-900 tracking-wider transition duration-300">
            Lilac & Lace
          </h1>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex justify-center items-center gap-6 text-gray-800 font-medium">

          <li className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
            <Link to={routes.home}>Home</Link>
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
            <Link to={routes.about}>About</Link>
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
            <Link to={routes.blogs}>Blogs</Link>
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
            <Link to={routes.contact}>Contact Us</Link>
          </li>

        </ul>

        {/* Column 3 - Button & Mobile Toggle */}
        <div className="flex justify-end items-center">

          <button className="hidden md:block px-5 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600
           transition duration-300 shadow-sm">
            Get Started
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-900 transition-colors duration-200"
            aria-label="Toggle Menu">
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-100 px-6 py-4 border-t border-purple-200">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">

            <li onClick={() => setIsOpen(false)}
              className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
              <Link to={routes.home}>Home</Link>
            </li>

            <li onClick={() => setIsOpen(false)}
              className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
              <Link to={routes.about}>About</Link>
            </li>

            <li onClick={() => setIsOpen(false)}
              className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
              <Link to={routes.blogs}>Blogs</Link>
            </li>

            <li onClick={() => setIsOpen(false)}
              className="px-3 py-1 rounded-md hover:bg-purple-300 hover:text-purple-900 transition duration-300">
              <Link to={routes.contact}>Contact Us</Link>
            </li>
            <li>
              <button className="w-full px-5 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;