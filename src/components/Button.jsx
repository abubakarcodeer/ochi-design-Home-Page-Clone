import React from 'react'

const Button = ({text}) => {
    return (
        
         <button className='flex gap-5 items-center w-fit bg-zinc-900 py-4 px-5 my-5 lg:text-[1vw] text-[3vw]  lg:my-0 uppercase text-zinc-100 rounded-full'><a href="#" className='mr-5'>{text}</a><div className='h-2 w-2 rounded-full bg-zinc-100'></div></button>
    )
}

export default Button