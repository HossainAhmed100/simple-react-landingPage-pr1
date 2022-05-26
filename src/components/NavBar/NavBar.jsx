import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNAV = () => {setNav(!nav)};
    return (
        <div className='text-white max-w-[1240px] mx-auto px-4 flex justify-between items-center h-24'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='px-[1rem] py-[0.3rem] rounded-full hover:bg-white hover:text-[#00df9a] transition-all duration-300'><a href="#home">Home</a></li>
                <li className='px-[1rem] py-[0.3rem] rounded-full hover:bg-white hover:text-[#00df9a] transition-all duration-300'><a href="#company">Company</a></li>
                <li className='px-[1rem] py-[0.3rem] rounded-full hover:bg-white hover:text-[#00df9a] transition-all duration-300'><a href="#pricing">Pricing</a></li>
                <li className='px-[1rem] py-[0.3rem] rounded-full hover:bg-white hover:text-[#00df9a] transition-all duration-300'><a href="#newsletter">Newsletter</a></li>
            </ul>
            <div onClick={handleNAV} className='block md:hidden'>
              {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}  
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
            <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>REACT.</h1>
                <ul className='p-4 hover:text-[#00df9a] transition-all duration-300 uppercase'>
                <li className='p-4 hover:text-[#00df9a] transition-all duration-300 border-b border-gray-600'><a href="#home">Home</a></li>
                <li className='p-4 hover:text-[#00df9a] transition-all duration-300 border-b border-gray-600'><a href="#company">Company</a></li>
                <li className='p-4 hover:text-[#00df9a] transition-all duration-300 border-b border-gray-600'><a href="#pricing">Pricing</a></li>
                <li className='p-4 hover:text-[#00df9a] transition-all duration-300'><a href="#newsletter">Newsletter</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;