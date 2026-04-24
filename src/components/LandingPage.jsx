import { motion } from 'motion/react'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import useWindow from './Hook/useWindow'

const LandingPage = () => {
    const islarge = useWindow()
    return (
        <div data-scroll data-scroll-section data-scroll-speed={islarge ? "-.8" : undefined} className='w-full min-h-[98vh]  relative lg:min-h-screen z-0 pt-1 flex flex-col'>
            <div className='textstructure mt-20 lg:mb-28 md:mt-32 px-[5vw] flex-1'>
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div key={index} className='masker'>
                            <div className='w-fit gap-1 flex items-center'>{
                                index == 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "10vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='w-[10vw] h-10  md:h-[6.5vw]  rounded-md self-baseline-last bg-green-600'></motion.div>)
                            }
                                <h1 className='text-6xl md:text-[10vw] uppercase leading-11 md:leading-[7.5vw] tracking-tight font-["FoundersGrotesk"] font-bold'>{item}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='border-t-[1px] border-zinc-500 md:h-30 pb-20 mb:pb-0 w-full'>
                <div className='flex justify-between flex-col md:flex-row gap-7 md:gap-0 px-[5vw] py-5 font-[NeueMontreal]' >
                    {["For public and private companies", "From the fist pitch to IPO"].map((item, index) => (
                        <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                    ))}
                    <div className='flex items-center'>
                        <div className=' px-4 py-1 border-1 text-[14px] uppercase rounded-full'>Start the project</div>
                        <div className='py-1 px-1 border-1 ml-1 rounded-full'><GoArrowUpRight /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage