// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo à gauche */}
                <div className="text-white text-lg font-bold">
                    <Link href="/" >Mana'o JOB</Link>
                </div>

                {/* Barre de recherche au centre */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500">
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
                                d="M21 21l-5.2-5.2M9 17a8 8 0 100-16 8 8 0 000 16z"
                            />
                        </svg>
                    </button>
                </div>
                {/* Bounton : Esapce recruteur */}
                <div className="text-white text-lg font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                    <a href="/recruiterSpace">
                        Recruiter Space
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
