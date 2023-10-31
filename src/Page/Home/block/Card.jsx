import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ id, image, name, rating, shortname }) => {
    return (
        <Link to={`/detail/${id}`} >
            <div key={id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-t-lg ' />
                <p className='text-gray-500 text-[15px] px-2 font-bold'>{shortname}</p>
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold cursor-pointer hover:text-orange-500'>{name}</p>
                    <p className='text-center'>
                        <span >{rating} Ratings</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card
