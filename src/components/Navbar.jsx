import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<div>
    <nav className="bg-gray-800 shadow ">
        <div className="px-8 mx-auto max-w-9xl">
            <div className="flex items-center justify-between h-16">
                <div className="w-full justify-between flex items-center">
                    <p className='text-gray-300 font-black text-2xl'>pabobernando.com</p>
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                           <Link to='/'><a className="text-gray-300  hover:text-cyan-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Home
                            </a></Link>
                            <Link to='/portfolio'>
                            <a className="text-gray-300 dark:text-white  hover:text-cyan-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Portfolio
                            </a></Link>
                            <Link to='/til'><a className="text-gray-300  hover:text-cyan-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                T I L
                            </a></Link>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="flex items-center ml-4 md:ml-6">
                    </div>
                </div>
                <div className="flex -mr-2 md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to='/'><a className="text-gray-300 hover:text-cyan-500  block px-3 py-2 rounded-md text-base font-medium">
                    Home
                </a></Link>
                <Link to='/portfolio'><a className="text-gray-300 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium">
                    Portfolio
                </a></Link>
                <Link to='/til'><a className="text-gray-300 hover:text-cyan-500  block px-3 py-2 rounded-md text-base font-medium">
                    T I L
                </a></Link>
            </div>
        </div>
    </nav>
</div>
  );
}

export default Navbar;
