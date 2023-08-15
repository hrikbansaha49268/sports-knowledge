"use client"
import "../globals.css"
import Image from "next/image";
import { useRef, useState } from "react";
import AboutCom from "@/components/AboutCom";
import { Open_Sans } from "next/font/google";
// import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
// import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const open_sans = Open_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: "variable"
});

const AboutUs = () => {

    const strength = useRef();
    const athletic = useRef();
    const zumba = useRef();
    const kick_box = useRef();

    const sections = [strength, athletic, zumba, kick_box];

    let [idx, setIdx] = useState(0);
    const [isDisabled, setIsDisabled] = useState({ fwd: false, bwd: true });

    const scrollInto = (section) => section.current.scrollIntoView({ behavior: "smooth" });

    const setDir = (direction) => {
        switch (direction) {
            case "left":
                setIdx(--idx);
                scrollInto(sections[idx]);
                if (idx == 0) setIsDisabled({ ...isDisabled, bwd: true });
                else setIsDisabled({ fwd: false, bwd: false });
                break;
            case "right":
                setIdx(++idx);
                scrollInto(sections[idx]);
                if (idx == 3) setIsDisabled({ ...isDisabled, fwd: true });
                else setIsDisabled({ fwd: false, bwd: false });
                break;
            default:
                setIsDisabled({ fwd: false, bwd: false });
                break;
        };
    };

    return (
        <main className={open_sans.className}>
            <header className="relative">
                <div className="lg:h-[90vh] h-[87vh] w-full hover:shadow-xl duration-300 ease-in-out top-0">
                    <video id="background-video" autoPlay muted style={{}} className='lg:block laptop:block hidden ticky top-0 -z-10 h-screen w-screen object-cover' loop>
                        <source src="/videos/desktop/two.mp4" type="video/mp4" />
                    </video>
                    <video id="background-video" autoPlay muted style={{}} className='block lg:hidden laptop:hidden fixed top-0 -z-10 h-screen w-screen object-right object-cover' loop>
                        <source src="/videos/mobile/two.mp4" type="video/mp4" />
                    </video>
                    <div className="flex flex-col h-full justify-center text-center mx-auto text-white ">
                        <div className="lg:absolute laptop:absolute laptop::z-10 lg:z-10 top-0 h-full flex flex-col justify-center">
                            <p className="lg:text-9xl laptop:text-9xl mb-4 text-5xl font-black"><span className="font-light italic">OUR</span> <span className="italic">AIM</span></p>
                            <p className="lg:w-1/2 laptop:w-3/4 mx-auto tracking-wide lg:text-lg laptop:text-lg text-xs lg:px-0 px-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur voluptatem ut at? Id accusantium tempora, eveniet error minus consequuntur in officiis reiciendis voluptatum blanditiis impedit iure excepturi! Est, corporis?
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-white">
                <div className="min-h-[70vh] relative mb-4 hover:shadow-xl duration-300 ease-in-out flex justify-between">
                    <Image src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="lg:block laptop:block hidden object-cover object-top h-full brightness-50 w-full absolute z-0 bg-black" width={3000} height={2500} alt="" />
                    <Image src="https://images.pexels.com/photos/15057323/pexels-photo-15057323/free-photo-of-people-running-in-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="block lg:hidden laptop:hidden object-cover object-top h-full brightness-[0.4] w-full absolute z-0 grayscale bg-black" width={3000} height={2500} alt="" />
                    <div className="flex flex-col justify-center text-white lg:px-8 px-4 z-20 lg:m-auto laptop:m-auto mx-auto mt-8">
                        <p className="lg:text-9xl laptop:text-9xl text-5xl font-black self-start lg:text-left text-center w-full lg:mt-0">METHODS</p>
                        <ul className="grid lg:grid-cols-2 laptop:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 font-light lg:w-3/4 laptop:w-3/4 text-3xl text-center h-full mx-auto my-8">
                            <li className="flex items-center">
                                <span className="font-black">1</span>. STRENGTH
                            </li>
                            <li className="flex items-center">
                                <span className="font-black">2</span>. ATHLETIC
                            </li>
                            <li className="flex items-center">
                                <span className="font-black">3</span>. ZUMBA
                            </li>
                            <li className="flex items-center">
                                <span className="font-black">4</span>. KICK BOXING
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto lg:px-0 px-3 lg:mt-32 laptop:mt-28">
                    <p className="text-center w-full lg:text-9xl laptop:text-9xl text-5xl my-4 font-black italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
                        OUR METHODS
                    </p>
                    <div className="relative group w-full">
                        <div className="flex flex-row overflow-x-hidden snap-x lg:space-x-4 laptop:space-x-3 laptop:my-8 lg:my-8 box-box">
                            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={strength}>
                                <AboutCom
                                    colorScheme={"bg-[#1b1f21]"}
                                    imgSrc={"https://images.unsplash.com/photo-1592632789004-57d4354f2499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
                                    txtColor={"text-white"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                                    title={"STRENGTH"} />
                            </div>
                            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={athletic}>
                                <AboutCom
                                    colorScheme={"bg-[#585858]"}
                                    imgSrc={"https://images.unsplash.com/photo-1618999930306-1f423ac5cbed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
                                    txtColor={"text-white"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                                    title={"ATHLETIC"} />
                            </div>
                            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={zumba}>
                                <AboutCom
                                    colorScheme={"bg-orange-100"}
                                    imgSrc={"https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                                    txtColor={"text-neutral-800"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                                    title={"ZUMBA"} />
                            </div>
                            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={kick_box}>
                                <AboutCom
                                    colorScheme={"bg-gradient-to-br to-[#bb9430] from-red-700 lg:py-0 py-4"}
                                    imgSrc={"https://images.unsplash.com/photo-1611816153165-fed23698666d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                                    txtColor={"text-white"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                                    title={"KICK BOXING"} />
                            </div>
                        </div>
                        <div className="w-full absolute top-0 h-full overflow-x-hidden">
                            <div className={`flex ${isDisabled.bwd ? "flex-row-reverse" : "flex-row"} justify-between h-full`}>
                                <button className={`w-fit active:scale-95 duration-300 ease-in-out cursor-pointer 
                                ${isDisabled.bwd ? "hidden" : "block laptop:-translate-x-16 lg:-translate-x-16 group-hover:translate-x-0"}`}
                                    onClick={() => setDir("left")}>
                                    <div className="bg-black lg:py-4 px-2 lg:px-3 py-2 lg:block hidden">
                                        <ArrowBackIosNewRoundedIcon sx={{ color: "white" }} fontSize="large" />
                                    </div>
                                    <div className="bg-black lg:py-4 px-2 laptop:px-3 lg:px-3 py-2 lg:hidden">
                                        <ArrowBackIosNewRoundedIcon sx={{ color: "white" }} />
                                    </div>
                                </button>
                                <button className={`w-fit active:scale-95 duration-300 ease-in-out cursor-pointer 
                                ${isDisabled.fwd ? "hidden" : "block laptop:translate-x-16 lg:translate-x-16 group-hover:translate-x-0"}`}
                                    onClick={() => setDir("right")}>
                                    <div className="bg-black lg:py-4 px-2 laptop:px-3 lg:px-3 py-2 lg:block hidden">
                                        <ArrowForwardIosRoundedIcon sx={{ color: "white" }} fontSize="large" />
                                    </div>
                                    <div className="bg-black lg:py-4 px-2 lg:px-3 py-2 lg:hidden">
                                        <ArrowForwardIosRoundedIcon sx={{ color: "white" }} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}

export default AboutUs;