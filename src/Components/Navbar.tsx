import React from 'react';
import Logo from '../assets/logo-text.png';


const Navbar = () => {
    return (
        <div>
            <div>
      <nav className="flex justify-between gap-4 container mx-auto py-4 ">
        <img src={Logo} className="w-[150px] h-[60px]" alt="" />
        <ul className="flex gap-4 items-center">
          <li>
            <a className='text-pink-600 hover:text-pink-700' >Home</a>
          </li>
          <li>
            <a >Technologies</a>
          </li>
          <li>
            <a >Projects</a>
          </li>
          <li>
            <a >About</a>
          </li>
          <li>
            <a >Contact</a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
    



          <button className="bg-white  -500 text-gray-700 px-4 py-2 rounded-md">
            Signin
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-3xl">
            Signup
          </button>
        </div>
      </nav>
    </div>
        </div>
    );
};

export default Navbar;