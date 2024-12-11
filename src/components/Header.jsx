import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token'); // Basic auth check

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-indigo-600">
                            EventHub
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        {/* Navigation Links */}
                        <Link
                            to="/events"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                            Events
                        </Link>

                        {/* Authentication Buttons */}
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/dashboard"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close Icon */}
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="pt-2 pb-3 space-y-1">
                        <Link
                            to="/events"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Events
                        </Link>

                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;