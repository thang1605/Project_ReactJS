import React from 'react'

const Button = ({ onclickHandler, value, title }) => {
    return (
        <button onClick={onclickHandler} value={value} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>{title}</button>
    )
}

export default Button
