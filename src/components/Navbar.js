import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu } from '@headlessui/react';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-primary">GameDev LMS</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                                Home
                            </Link>
                            <Link to="/courses" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                                Courses
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {user ? (
                            <Menu as="div" className="ml-3 relative">
                                <Menu.Button className="flex items-center">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={user.avatar || 'https://via.placeholder.com/40'}
                                        alt={user.name}
                                    />
                                </Menu.Button>
                                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Dashboard
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Profile
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button
                                            onClick={logout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        ) : (
                            <div className="space-x-4">
                                <Link to="/login" className="btn-primary">
                                    Login
                                </Link>
                                <Link to="/register" className="btn-secondary">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;