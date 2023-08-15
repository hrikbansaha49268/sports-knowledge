const BgVideo = () => {
    return (
        <section className="fixed top-0 -z-10 h-screen w-screen bg-black">
            <video id="background-video" autoPlay muted style={{}} className='lg:block laptop:block hidden h-full object-cover' loop>
                <source src="/videos/desktop/one.mp4" type="video/mp4" />
            </video>
            <video id="background-video" autoPlay muted style={{}} className='block laptop:hidden lg:hidden mx-auto h-full w-full object-cover' loop>
                <source src="/videos/mobile/one.mp4" type="video/mp4" />
            </video>
        </section>
    );
}

export default BgVideo;