import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Learnofy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering learners worldwide with quality education and accessible resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/full-stack" className="text-gray-300 hover:text-white transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses/machine-learning" className="text-gray-300 hover:text-white transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/courses/artificial-intelligence" className="text-gray-300 hover:text-white transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/courses/dsa" className="text-gray-300 hover:text-white transition-colors">
                  Data Structures & Algorithms
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span className="text-gray-300">123 Education St, Learning City</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@learnofy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Learnofy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;