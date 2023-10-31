import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';
import { categories } from '../../../data/Data'
const Footer = () => {
    return (
        <div className='flex justify-between bg-gray-100 border-t-2 p-5'>
            <div className="w-[30%] items-center justify-items-center text-center">
                <h1 className='text-2xl sm:text-3xl lg:text-4xl py-6'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <button className='w-full rounded-none border-2 border-orange-500 bg-white h-12 font-bold text-[20px] mb-8 hover:bg-orange-500 hover:text-white'>NEWSLETTER</button>
                <img className='w-full mb-10' src="https://www.allrecipes.com/thmb/654t4XHoQIwmjRLxb1jkXyA7xOY=/300x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ar_magazine-457b736e5ed6442ea95b29d69489d496.png" alt="/" />
                <p className='mb-6'>Follow Us</p>
                <div className='flex justify-between items-center text-[30px]'><FaFacebookF className='cursor-pointer' /><AiOutlineInstagram className='cursor-pointer' /><BsTiktok className='cursor-pointer' /><AiFillYoutube className='cursor-pointer' /><AiOutlineTwitter className='cursor-pointer' /></div>
            </div>
            <div className='mt-12'>
                {categories.map((item, index) => (
                    <div key={index} className='p-2 flex justify-between items-center'>
                        <a href="/" className='font-bold sm:text-xl hover:border-b border-orange-500'><h2 >{item.name}</h2></a>
                    </div>
                ))}
            </div>
            <div className='mt-12'>
                <ul className=' items-center grid grid-cols-2 gap-3'>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">About Us</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Anti-Racism Pledge</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Product Vetting</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Advertise</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Contact</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Editorial Process</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Privacy Policy</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Terms of Service</a></li>
                    <li ><a className='cursor-pointer hover:border-b border-orange-500' href="/">Careers</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
