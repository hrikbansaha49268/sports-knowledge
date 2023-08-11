import { Open_Sans } from "next/font/google";
import Image from "next/image";
import "../globals.css"

const open_sans = Open_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: "variable"
});

const AboutUs = () => {
    return (
        <main className={open_sans.className}>
            <header className="relative">
                <div className="lg:h-[90vh] h-[80vh] w-full hover:shadow-xl duration-300 ease-in-out top-0">
                    <video id="background-video" autoPlay muted style={{}} className='lg:block hidden lg:sticky fixed top-0 -z-10 h-screen w-screen object-cover' loop>
                        <source src="/videos/desktop/two.mp4" type="video/mp4" />
                    </video>
                    <video id="background-video" autoPlay muted style={{}} className='block lg:hidden lg:sticky fixed top-0 -z-10 h-screen w-screen object-right object-cover' loop>
                        <source src="/videos/mobile/two.mp4" type="video/mp4" />
                    </video>
                    <div className="flex flex-col h-full justify-center text-center mx-auto text-white">
                        <div className="lg:absolute lg:z-10 top-0 h-full flex flex-col justify-center">
                            <p className="lg:text-9xl mb-4 text-5xl font-black"><span className="font-light italic">OUR</span> <span className="italic">AIM</span></p>
                            <p className="lg:w-1/2 mx-auto tracking-wide lg:text-lg text-xs lg:px-0 px-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur voluptatem ut at? Id accusantium tempora, eveniet error minus consequuntur in officiis reiciendis voluptatum blanditiis impedit iure excepturi! Est, corporis?
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-white">
                <div className="min-h-[70vh] relative mb-4 hover:shadow-xl duration-300 ease-in-out flex justify-between">
                    <Image src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="lg:block hidden object-cover object-top h-full brightness-50 w-full absolute z-0" width={3000} height={2500} alt="" />
                    <Image src="https://images.pexels.com/photos/15057323/pexels-photo-15057323/free-photo-of-people-running-in-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="block lg:hidden object-cover object-top h-full brightness-[0.4] w-full absolute z-0 grayscale" width={3000} height={2500} alt="" />
                    <div className="flex flex-col justify-center text-white lg:px-8 px-4 z-20 lg:m-auto mx-auto mt-8">
                        <p className="lg:text-9xl text-5xl font-black self-start lg:text-left text-center w-full lg:mt-0">METHODS</p>
                        <ul className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 my-8 font-light lg:w-3/4 text-3xl text-center h-full mx-auto">
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
                <div className="container mx-auto flex flex-wrap lg:px-0 px-4 lg:my-8">
                    <p className="text-center w-full lg:text-9xl text-5xl my-4 font-black italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
                        OUR METHODS
                    </p>
                    <div className="lg:h-[70vh] w-full lg:my-0 my-4 hover:shadow-xl duration-300 ease-in-out flex lg:flex-row-reverse flex-col justify-between">
                        <Image src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="object-cover object-top lg:w-1/2" width={3000} height={2500} alt="" />
                        <div className="flex flex-col items-center justify-center h-full lg:py-0 pb-4 lg:w-1/2 text-white lg:px-8 px-2 bg-[#283830]">
                            <p className="lg:text-8xl text-4xl lg:py-0 py-4 font-black lg:mb-4">STRENGTH</p>
                            <p className="text-center lg:w-[90%] lg:text-sm text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut. Nesciunt eveniet saepe neque. Dolor iure cumque dolorem assumenda amet ratitwo alias error iste illum, nobis modi quae omnis? Sapiente, doloremque qui. Placeat magni culpa aperiam itaque, asperiores, necessitatibus nihil a sunt non voluptatibus corrupti officiis eum dolorem harum distinctio.</p>
                        </div>
                    </div>
                    <div className="lg:h-[70vh] w-full lg:my-0 my-4 hover:shadow-xl duration-300 ease-in-out flex lg:flex-row flex-col-reverse justify-between">
                        <div className="lg:h-full lg:w-1/2">
                            <Image src="https://images.unsplash.com/photo-1618999930306-1f423ac5cbed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="object-cover lg:h-full h-[50vh] w-full" width={3000} height={2500} alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center h-full lg:w-1/2 text-white lg:px-8 px-2 bg-[#585858] lg:py-0 py-4">
                            <p className="lg:text-8xl text-4xl font-black mb-4">ATHLETIC</p>
                            <p className="text-center w-[90%] lg:text-sm text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut. Nesciunt eveniet saepe neque. Dolor iure cumque dolorem assumenda amet ratitwo alias error iste illum, nobis modi quae omnis? Sapiente, doloremque qui. Placeat magni culpa aperiam itaque, asperiores, necessitatibus nihil a sunt non voluptatibus corrupti officiis eum dolorem harum distinctio.</p>
                        </div>
                    </div>
                    <div className="lg:h-[70vh] w-full lg:my-0 my-4 hover:shadow-xl duration-300 ease-in-out flex lg:flex-row flex-col justify-between">
                        <div className="h-full lg:w-1/2">
                            <Image src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="object-cover h-full w-full" width={3000} height={2500} alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center h-full lg:w-1/2 text-neutral-800 lg:px-8 px-2 bg-orange-100 lg:py-0 py-4">
                            <p className="lg:text-8xl text-4xl font-black mb-4">ZUMBA</p>
                            <p className="text-center w-[90%] lg:text-sm text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut. Nesciunt eveniet saepe neque. Dolor iure cumque dolorem assumenda amet ratitwo alias error iste illum, nobis modi quae omnis? Sapiente, doloremque qui. Placeat magni culpa aperiam itaque, asperiores, necessitatibus nihil a sunt non voluptatibus corrupti officiis eum dolorem harum distinctio.</p>
                        </div>
                    </div>
                    <div className="lg:h-[70vh] w-full lg:my-0 my-4 hover:shadow-xl duration-300 ease-in-out flex lg:flex-row-reverse flex-col-reverse justify-between">
                        <div className="h-full lg:w-1/2">
                            <Image src="https://images.unsplash.com/photo-1611816153165-fed23698666d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="object-cover h-full w-full" width={3000} height={2500} alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center h-full lg:w-1/2 text-white lg:px-8 px-2 bg-gradient-to-br to-[#bb9430] from-red-700 lg:py-0 py-4">
                            <p className="lg:text-7xl text-4xl font-black mb-4">KICK BOXING</p>
                            <p className="text-center w-[90%] lg:text-sm text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut. Nesciunt eveniet saepe neque. Dolor iure cumque dolorem assumenda amet ratitwo alias error iste illum, nobis modi quae omnis? Sapiente, doloremque qui. Placeat magni culpa aperiam itaque, asperiores, necessitatibus nihil a sunt non voluptatibus corrupti officiis eum dolorem harum distinctio.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}

export default AboutUs;