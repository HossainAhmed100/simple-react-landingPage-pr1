import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div id='home' className='text-white'>
            <div className='mx-w-[800px] mt-[-96px] w-full h-screen text-center flex-col flex mx-auto justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold md:text-7xl sm-text-6xl text-4xl md:p-6'>Grow With Data.</h1>
            <div className='flex justify-center items-center'>
            <p className='font-bold md:t-ext-5xl sm:text-4xl text-xl py-4'>fast, flexible fainancing for</p>

            <Typed className='font-bold md:t-ext-5xl pl-2 md:pl-4 sm:text-4xl text-xl text-[#00df9a]' 
            strings={['BTB', 'SASS', 'BTC']}
            typeSpeed={100} 
            backSpeed={80} 
            loop/>
            </div>
        <p className='md:text-2xl text-xl font-bold text-[#64758C]'>Monitor your data anslytics tp increase revenue fot BTB, BTC & SASS platforms.</p>
        <button className='bg-[#00df9a]  transition-all duration-300 hover:scale-75  w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-[#000300]'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;