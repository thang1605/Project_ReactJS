import React, { useState } from 'react'
import Button from '../block/Button';

const Food = ({ result, handleClick }) => {
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center mb-5'>Explore Dinner Recipes</h1>

            {/* Filter Row */}
            <div className='flex flex-col justify-between'>
                <p className='font-bold text-gray-700'>Filter Type</p>
                {/*Filter Type */}
                <div className='flex justify-between flex-wrap'>
                    <div>
                        <Button onclickHandler={handleClick} value="" title="All" />
                        <Button onclickHandler={handleClick} value="MAIN-DISHES" title="MAIN DISHES" />
                        <Button onclickHandler={handleClick} value="MEAT" title="MEAT" />
                        <Button onclickHandler={handleClick} value="CHICKEN" title="CHICKEN" />
                        <Button onclickHandler={handleClick} value="SEAFOOD" title="SEAFOOD" />
                        <Button onclickHandler={handleClick} value="KITCHEN-TIPS" title="KITCHEN TIPS" />
                    </div>
                </div>

            </div>
            {/* Display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {result}
            </div>
        </div>
    )
}

export default Food
