import React from 'react'
import useWindow from './Hook/useWindow'

const Cards = () => {
    const islarge = useWindow()
    return (
        <div className={islarge ?"sticky top-0" :"" +` w-full h-fit bg-zinc-200  font-["NeueMontreal"] text-5xl font-semibold`}>
            <div className='w-full border-b-2 border-zinc-400'>
                <p className='w-full font-normal mb-10 px-[5vw] text-[2rem]  md:text-[4vw]'>Client's reviews</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-[5vw] py-10 lg:py-30'>
                <div className='relative w-full lg:h-[25vw] h-[38vh] bg-[#004D43] lg:col-span-2 md:col-span-2 col-span-1 flex items-center justify-center rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" width={150} alt="" />
                    <button className='border-1 font-normal rounded-full p-2 md:text-[1vw]  border-[#cdea68] text-[16px] absolute bottom-5 left-5' ><span className='text-[#cdea68]'>©2019–2025</span></button>
                </div>
                <div className='relative w-full md:h-[25vw] h-[38vh] bg-zinc-900 col-span-1 flex items-center justify-center rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" width={150} alt="" />
                    <button className='border-1 font-normal text-[16px] md:text-[1vw] rounded-full p-2 border-zinc-200  absolute bottom-5 left-5' ><span className='text-zinc-200'>Rating 5.0 on Clutch</span></button>
                </div>
                <div className='relative w-full md:h-[25vw] h-[38vh] bg-[#212121] col-span-1 flex items-center justify-center rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" width={100} />
                    <button className='border-1 font-normal rounded-full p-2 border-zinc-200 md:text-[1vw] text-[16px] absolute bottom-5 left-5' ><span className='text-zinc-200'>Business Bootcamp Alumni</span></button>
                </div>
            </div>
        </div>
    )
}

export default Cards