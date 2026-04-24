import React, { useEffect, useState } from "react";
import Eye from "./Eye";
import useWindow from "./Hook/useWindow";

const PlayEyeContainer = () => {

    const islarge = useWindow()
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
        <div className="z-30 w-full h-[30vh] sm:h-screen overflow-hidden relative">
            <div data-scroll data-scroll-speed={islarge ? "-.6" : undefined} className='w-full h-full bg-contain bg-no-repeat sm:bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>
            <Eye rotate={rotate} play={true} />
        </div>
    );
};

export default PlayEyeContainer;
