import React from 'react'
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 pb-0 mb-3 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to="/">
                    <p className='text-2xl font-bold text-white py-1 px-2 bg-blue-500 rounded dark:bg-blue-300 '>
                        VNSearch 🔎
                    </p>
                </Link>
                <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-lg dark:bg-gray-800 bg-white rounded px-2 py-1'>
                    {darkTheme ? '💡' : '🌑'}
                </button>
            </div>
            <Search />
        </div>
    )
}



