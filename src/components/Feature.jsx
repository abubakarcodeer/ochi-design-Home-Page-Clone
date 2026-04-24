import {  motion } from 'motion/react'
import Button from './Button'

const features = [

    {
        title: "Salience Labs",
        image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
        anchor: [
            "Brand Identity", "Pitch deck"
        ]

    },
    {
        title: "Medallia Experience",
        image: "https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png",
        anchor: [
            "Conference", "Executive Keynote", "Product Launch"
        ]
    },
    {
        title: "Softstart",
        image: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg",
        anchor: [
            "Branded Template", "Sales Deck"
        ]
    },
    {
        title: "AH2 & Matt Horn",
        image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
        anchor: [
            "Agency", "Company Presentation"
        ]
    },
    {
        title: "Vise",
        image: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
        anchor: [
            "Pitch deck"
        ]
    }
]
const Feature = () => {
   

    return (
        <div className='w-full py-10 bg-zinc-200 font-["NeueMontreal"] rounded-xl'>
            <div className='w-full px-[5vw] pt-10 pb-5 border-b-1'>
                <h1 className='text-[2rem]  md:text-[4vw] font-["NeueMontreal"] tracking-tight font-medium'>Featured projects</h1>
            </div>
            <div className='px-[5vw] w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
                {
                    features.map((item, index) => (
                        <motion.div whileHover="hover" initial="rest" animate="rest" key={index} className='relative card col-span-1 h-fit'>
                            <div className='flex items-center gap-2 pb-5 uppercase text-md tracking-tight'>
                                <span className='w-3 h-3 rounded-full bg-zinc-900'></span> {item.title}
                            </div>
                            <div className={`w-full h-full rounded-xl overflow-hidden hover:scale-98 group transition-transform duration-300 ease-in`}>
                                <img key={index} src={item.image} alt="" className='z-20 w-full h-full bg-cover group-hover:scale-105 duration-800 delay-100 ease-out' />
                            </div>
                            <h1 className={`absolute text-[#CDEA68] uppercase text-[6vw] z-100 lg:left-[50%] top-[50%] text-center font-["FoundersGrotesk"] w-full ${index % 2 === 0 ? '' : 'lg:-translate-x-[100%]'}  lg:-translate-y-[50%] font-semibold`}>

                            {item.title.split("").map((letter, i) => (
                                
                              <motion.span key={i}  variants={{  rest: { y: "100%", opacity:0},hover: { y: "0%", opacity:1 }}} transition={{ease: [0.22, 1, 0.36, 1], delay: i * 0.01 }} className='inline-block'>{letter === " " ? "\u00A0" : letter}</motion.span>
                               
                            ))}
                             </h1>
                            <div className='w-full flex flex-wrap gap-1 mt-5'>
                                {item.anchor.map((a, index) => (
                                    <span className='py-2 px-3 border-1 rounded-full text-sm tracking-tight' key={index}>{a}</span>
                                ))
                                }
                            </div>

                        </motion.div>
                    ))
                }
            </div>
            <div className="place-items-center">
                <Button text={"View all caseStudies"} />
            </div>
        </div >
    )
}

export default Feature