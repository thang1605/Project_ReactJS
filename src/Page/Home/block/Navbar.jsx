import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { categories } from '../../../data/Data'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({ handleInputChange }) => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky z-[999] top-0 bg-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]'>
            {/* Left side */}
            <div className="flex items-center">
                <div className='cursor-pointer' onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={30} />
                </div>
                <Link to='/home'>

                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                        Best <span className='font-bold'>Eats</span>
                    </h1>
                </Link>

            </div>
            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input onChange={handleInputChange} className='bg-transparent p-2 focus:outline-none w-[150px] sm:w-[300px] lg:w-[400px]' type="text" placeholder='Search foods' />
            </div>

            {/* Mobile Menu  */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-0 cursor-pointer' onClick={() => setNav(!nav)} />
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        {categories.map((item, index) => (
                            <li key={index} className='p-2 flex justify-between items-center'>
                                <a href="/" className='font-bold sm:text-xl hover:border-b border-orange-500'><h2 >{item.name}</h2></a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar
