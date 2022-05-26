import React from 'react';
import Single from '../Assets/single.png';
import Double from '../Assets/double.png';
import Triple from '../Assets/triple.png';
const Cards = () => {
    return (
        <div id='pricing' className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 mb:my-0 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Sen Up To 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] transition-all duration-300 hover:scale-75 text-black rounded-md font-medium my-6 mx-auto px-6 py-3 w-[200px]'>Start Trail</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Double</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Sen Up To 2 GB</p>
                    </div>
                    <button className='bg-[#000300] transition-all duration-300 hover:scale-75  text-[#00df9a] rounded-md font-medium my-6 mx-auto px-6 py-3 w-[200px]'>Start Trail</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 mb:my-0 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Sen Up To 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] transition-all duration-300 hover:scale-75  text-black rounded-md font-medium my-6 mx-auto px-6 py-3 w-[200px]'>Start Trail</button>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;