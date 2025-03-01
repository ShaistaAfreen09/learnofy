import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Learnofy</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              About Us
            </Link>
            <Link to="/courses" className="px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Courses
            </Link>
            {user ? (
              <button
                onClick={() => logout()}
                className="px-3 py-2 rounded-md bg-indigo-700 hover:bg-indigo-800 transition-colors"
              >
                Logout
              </button>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md bg-indigo-700 hover:bg-indigo-800 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            {user ? (
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="w-full text-left px-3 py-2 rounded-md bg-indigo-700 hover:bg-indigo-800 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md bg-indigo-700 hover:bg-indigo-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;