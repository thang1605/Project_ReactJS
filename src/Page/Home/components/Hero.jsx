import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://www.allrecipes.com/thmb/zMYEHY5anMrplRcqciuDCjH7Cio=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/705937_Grilled-Asian-Chicken-2000-e7e11131fd29411ab259bd23e772ef2b.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero

// Overlay