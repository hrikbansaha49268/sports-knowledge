import { Open_Sans } from "next/font/google";
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const open_sans = Open_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: "variable"
});

const ReachUs = () => {
    return (
        <main className={open_sans.className}>
            <div className="lg:px-0 px-2">
                <p className="lg:text-9xl text-5xl font-black text-center mt-32 uppercase">
                    <span className="font-medium">Reach</span> <span className="italic">Us</span>
                </p>
                <section className="flex lg:flex-wrap flex-col container mx-auto lg:h-[50vh] border-2 lg:mt-16 my-8">
                    <div className="lg:w-1/2 h-full hover:bg-gray-200 duration-200 ease-in-out lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 lg:px-0 px-4">
                        <div className="lg:w-1/2 mx-auto h-full">
                            <p className="text-2xl font-black italic my-8">Contact Us</p>
                            <div className="lg:h-3/4 h-[30vh] lg:mb-0 mb-8 flex flex-col justify-around">
                                <span className="flex">
                                    <PhoneIcon />
                                    <p className="ml-4">Call us at +91 1234567890</p>
                                </span>
                                <span className="flex">
                                    <AlternateEmailIcon />
                                    <p className="ml-4">Email @ abc@xyz.com</p>
                                </span>
                                <span className="flex">
                                    <LocationOnIcon />
                                    <p className="ml-4">Visit us at 14 Kulkarni Patil Bhavan 2nd Floor, Murzban Road, Mumbai-400001</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="h-full lg:w-1/2 hover:bg-gray-200 duration-200 ease-in-out">
                        <div className="w-3/4 h-full mx-auto">
                            <p className="text-2xl font-black italic my-8 uppercase">Submit Your query</p>
                            <form className="flex flex-col justify-between h-3/4">
                                <input type="text" placeholder="Give your name" className="outline-none bg-transparent border-b-2 border-black px-8 py-4 focus:bg-gray-200 focus:bg-opacity-30 rounded-t-md" />
                                <input type="text" placeholder="Give your contact Number" className="outline-none bg-transparent border-b-2 border-black px-8 py-4 focus:bg-gray-200 focus:bg-opacity-30 rounded-t-md" />
                                <input type="email" placeholder="Give your email" className="outline-none bg-transparent border-b-2 border-black px-8 py-4 focus:bg-gray-200 focus:bg-opacity-30 rounded-t-md" />
                                <input type="submit" className="bg-black text-white w-3/4 mx-auto py-4 rounded-lg cursor-pointer font-extrabold italic lg:my-0 my-8" value="Click to Reach" />
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main >
    );
}

export default ReachUs;