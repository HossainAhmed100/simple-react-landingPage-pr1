import React from 'react';

const Newsletter = () => {
    return (
        <div id='newsletter' className='w-full text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl font-bold text-2xl py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter stay up to dtae</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-gray-700' type="email" name="" id="" placeholder='Enter Your Email'/>
                    <button className='bg-[#00df9a] transition-all duration-300 hover:translate-x-3 text-[#000300] w-[200px] rounded-md ml-4 my-6 font-bold px-6 py-3'>Notify Me</button>   
                </div>
                <p>care both the protection of your data. Red Your <span className='text-[#00df9a]'><a href="#privaci">Privacy Policy</a></span>.</p>
            </div>
            </div>
        </div>
    );
};

export default Newsletter;