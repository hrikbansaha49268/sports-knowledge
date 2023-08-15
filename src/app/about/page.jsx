"use client";
import "@/styles/globals.css";
import { useRef, useState } from "react";
import { Open_Sans } from "next/font/google";
import MethodList from "@/components/about/MethodList";
import Hero from "@/components/about/Hero";
import ItemsList from "@/components/about/ItemsList";
import CarouselButtons from "@/components/about/CarouselButtons";


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

    const setDirection = (direction) => {
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
            <Hero />
            <section className="bg-white">
                <MethodList />
                <div className="lg:container mx-auto lg:px-0 px-3 lg:mt-32 laptop:mt-28">
                    <p className="text-center w-full lg:text-9xl laptop:text-9xl text-5xl my-4 font-black italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
                        OUR METHODS
                    </p>
                    <div className="relative group w-full">
                        <ItemsList referenceList={sections} />
                        <CarouselButtons setDir={setDirection} isDisabled={isDisabled} />
                    </div>
                </div>
            </section>
        </main >
    );
}

export default AboutUs;