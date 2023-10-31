import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun</p>
                    <p className='px-2'>Through</p>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun</p>
                    <p className='px-2'>Through</p>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun</p>
                    <p className='px-2'>Through</p>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
            </div>
        </div>
    )
}

export default HeadlineCards
