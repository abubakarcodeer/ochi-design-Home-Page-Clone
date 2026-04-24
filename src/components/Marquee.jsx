import React from 'react'
import { motion } from "motion/react"
import useWindow from './Hook/useWindow'

const Marquee = () => {
    const islarge = useWindow()
    return (
        <div data-scroll data-scroll-section data-scroll-speed={islarge ? ".1" : undefined} className='w-full z-10 pt-20 pb-20 rounded-tl-3xl rounded-tr-3xl text-zinc-100 bg-[#004D43]'>
            <div className='text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[25vw] leading-[1] -my-[3vw] font-["FoundersGrotesk"] font-semibold  uppercase pr-10'>We are ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[25vw] leading-[1] -my-[3vw] font-["FoundersGrotesk"] font-semibold uppercase pr-10'>We are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee