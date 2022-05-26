import React from 'react';
import Laptop from '../Assets/laptop.jpg';

const Analytics = () => {
    return (
        <div id='company' className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sn:text-3xl txet-2xl font-bold py-2'>Manage Data Abalytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, dicta unde commodi tenetur rerum nostrum minima reprehenderit animi esse ea possimus, deserunt laboriosam libero eius itaque veniam molestias aliquam? Eaque, optio amet aliquid eligendi sapiente porro rerum fuga voluptatibus facilis.</p>
                <button className='bg-[#000300] transition-all duration-300 hover:translate-x-3 text-[#00df9a] w-[200px] mx-auto md:mx-0 rounded-md my-6 font-medium px-6 py-3'>Get Started</button>
            </div>
            </div>
        </div>
    );
};

export default Analytics;