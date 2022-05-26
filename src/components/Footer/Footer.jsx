import React from 'react';
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-3 text-gray-300 bg-black'>
        <div>
        <h1 className='text-[#00df9a] text-3xl font-bold w-full'>REACT.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero ut eaque magni autem blanditiis nulla ipsam voluptate ratione natus.
        </p>
        <div className='flex md:w-[75%]  justify-between my-6'>
            <a href="#dribble"><FaDribbbleSquare size={30} className='transition duration-300 hover:text-[#00df9a]'/></a>
            <a href="#facebook"><FaFacebookSquare size={30} className='transition duration-300 hover:text-[#00df9a]'/></a>
            <a href="#gitHub"><FaGithubSquare size={30} className='transition duration-300 hover:text-[#00df9a]'/></a>
            <a href="#instragum"><FaInstagram size={30} className='transition duration-300 hover:text-[#00df9a]'/></a>
            <a href="#twitter"><FaTwitterSquare size={30} className='transition duration-300 hover:text-[#00df9a]'/></a>
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Analytics'>Analytics</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Marketing'>Marketing</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Commerce'>Commerce</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Insights'>Insights</a></li>
        </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Pricing'>Pricing</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Documentions'>Documentions</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Guides'>Guides</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#API'>API Status</a></li>
        </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#About'>About</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Blog'>Blog</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Jobs'>Jobs</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Press'>Press</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Careers'>Careers</a></li>
        </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Claim'>Claim</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Policy'>Policy</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#00df9a] hover:translate-x-3'><a href='#Terms'>Terms</a></li>
        </ul>
        </div>
        </div>
        </div>
    );
};

export default Footer;