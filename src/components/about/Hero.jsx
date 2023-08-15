const Hero = () => {
    return (
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
    );
}

export default Hero;