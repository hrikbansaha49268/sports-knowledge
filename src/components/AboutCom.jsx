import Image from "next/image";

const AboutCom = ({ colorScheme, imgSrc, orientation, title, txtColor }) => {
    return (
        <div className={`lg:h-[65vh] w-full lg:my-0 my-4 hover:shadow-xl duration-300 ease-in-out flex ${orientation} justify-between snap-center`}>
            <div className="h-full lg:w-1/2">
                <Image src={imgSrc} className="object-cover w-full lg:h-full h-[40vh]" width={3000} height={2500} alt="" />
            </div>
            <div className={`flex flex-col items-center justify-center h-full lg:w-1/2 ${txtColor} lg:py-0 py-4 lg:px-8 px-2 ${colorScheme}`}>
                <p className="lg:text-7xl text-4xl font-black mb-4">{title}</p>
                <p className="text-center w-[90%] lg:text-sm text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut. Nesciunt eveniet saepe neque. Dolor iure cumque dolorem assumenda amet ratitwo alias error iste illum, nobis modi quae omnis? Sapiente, doloremque qui. Placeat magni culpa aperiam itaque, asperiores, necessitatibus nihil a sunt non voluptatibus corrupti officiis eum dolorem harum distinctio.
                </p>
            </div>
        </div>
    );
};

export default AboutCom;