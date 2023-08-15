import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutItem = ({ colorScheme, imgSrc, orientation, title, txtColor }) => {
    const textRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            {
                autoAlpha: 0.3,
                x: -20
            },
            {
                x: 0,
                delay: 0.5,
                autoAlpha: 1,
                duration: 0.5,
                scrollTrigger: {
                    scroller: ".box-box",
                    trigger: textRef.current,
                    start: "top 60%",
                    end: "bottom 0%",
                    toggleActions: "play none restart reverse"
                },
            }
        );
    });

    return (
        <div className={`laptop:h-[70vh] lg:h-[65vh] w-full laptop:my-0 lg:my-0 my-4 hover:shadow-xl duration-300 ease-in-out flex ${orientation} justify-between snap-center`}>
            <div className="h-full laptop:w-1/2 lg:w-1/2">
                <Image src={imgSrc} className="object-cover w-full laptop:h-full lg:h-full h-[40vh]" width={3000} height={2500} alt="" />
            </div>
            <div
                className={`laptop:w-1/2 lg:w-1/2 ${txtColor} laptop:py-0 lg:py-0 py-4 laptop:px-6 lg:px-8 px-2 ${colorScheme}`}>
                <span ref={textRef} className="flex flex-col items-center justify-center h-full">
                    <p className="laptop:text-7xl lg:text-7xl text-4xl font-black mb-4">{title}</p>
                    <p className="text-center w-[90%] laptop:text-base lg:text-base text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut. Nesciunt eveniet saepe neque. Dolor iure cumque dolorem assumenda amet ratitwo alias error iste illum, nobis modi quae omnis? Sapiente, doloremque qui. Placeat magni culpa aperiam itaque, asperiores, necessitatibus nihil a sunt non voluptatibus corrupti officiis eum dolorem harum distinctio.
                    </p>
                </span>
            </div>
        </div>
    );
};

export default AboutItem;