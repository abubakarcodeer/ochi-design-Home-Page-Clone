import React, { useEffect, useState } from 'react'
import Eye from '../components/Eye'
import Button from '../components/Button'


const ReadyToStart = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div data-scroll-container className='sticky -top-65 w-full md:min-h-screen bg-[#CDEA68] font-["FoundersGrotesk"] font-extrabold py-20 rounded-xl'>
             <h1 className='flex flex-col text-[15vw] lg:text-[12vw] lg:leading-[8vw] leading-[11vw] items-center'><span>READY</span><span>TO START</span><span >sTHE PROJECT?</span></h1>
            <div data-scroll data-scroll-speed="-.35"  className='-translate-y-30 hidden lg:block'><Eye rotate={rotate} play={false} /></div>
            <div className='font-["NeueMontreal"] font-normal w-full flex items-center flex-col mt-10'>
                <Button text={"START THE PROJECT"} />
                <p className='-mt-2 md:mt-3 '>OR</p>
                <button className='flex gap-5 items-center w-fit border-1 border-zinc-900 lg:text-[1vw] text-[3vw] py-4 mt-3 px-5 uppercase text-zinc-900 rounded-full'><a href="#" className='mr-5'>HELLO@OCHI.DESIGN</a><div className='h-2 w-2 rounded-full bg-zinc-900'></div></button>
            </div>
           </div>
        
    )
}

export default ReadyToStart