import React from 'react'
import Button from './Button'
import useWindow from './Hook/useWindow'

const About = () => {
    const islarge = useWindow()
    return (
        <div data-scroll data-scroll-section data-scroll-speed={islarge ? "-.2" : undefined} className='w-full  bg-[#CDEA68] lg:rounded-tl-3xl lg:rounded-tr-3xl text-zinc-800 z-20 '>
            <div className='border-b-1 py-[6vw] px-[5vw]'>
                <h1 className='font-["NeueMontreal"] text-3xl md:text-[4vw] font-thin leading-7 md:leading-[4.5vw] tracking-tight '>We craft category-defining presentations, brand identities, and digital experiences that
                    <span className="md:border-b-2  ml-2.5">drive funding,</span>
                    <span className="border-b-2  ml-2.5">sales,</span>
                    <span className="md:border-b-2 ml-2.5">market leadership</span>.
                </h1>
            </div>
            <div className='pt-[2vw] pb-[6vw] px-[5vw] grid gap-y-10 md:grid-cols-12 border-b-1'>
                <div className="md:col-span-4 lg:col-span-6 "><p>What you can expect:</p></div>
                <div className="md:col-span-4 lg:col-span-4 ">
                    <div className="flex flex-col gap-8 max-w-[273px]">
                        <p>We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"</p>
                        <p>Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.</p>
                        <p>Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.</p>
                    </div>
                </div>
                <div className="md:col-span-4 lg:col-span-2  md:items-end md:justify-end md:flex lg:justify-start">
                    <div>
                        <p className="mb-5">S:</p>
                        <ul>
                            <li className="social-list__item">
                                <a className="border-b-1 social-list__link link link--underline" href="#">
                                    Instagram												</a>
                            </li>
                            <li className="social-list__item">
                                <a className="border-b-1 social-list__link link link--underline" href="#">
                                    Behance												</a>
                            </li>
                            <li className="social-list__item">
                                <a className="border-b-1 social-list__link link link--underline" href="#">
                                    Facebook												</a>
                            </li>
                            <li className="social-list__item">
                                <a className="border-b-1 social-list__link link link--underline" href="#">
                                    Linkedin												</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='pt-[1vw] pb-[6vw] px-[5vw] grid md:grid-cols-1 lg:grid-cols-2 '>
                <div>
                    <h2 className="text-3xl tracking-tight py-2 md:py-0  md:text-[3.5vw]">How we can help:</h2>
                    <Button text={"See more"} />
                </div>
                <div>
                    <div className="rounded overflow-hidden">
                        <picture className="w-full">
                            <img className="bg-zinc-200 w-full max-w-full rounded-l-lg entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" width="663" height="469" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" alt="image description" data-ll-status="loaded" srcSet="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"></img>
                        </picture>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default About