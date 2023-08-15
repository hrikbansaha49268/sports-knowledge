import '@/styles/globals.css';
import Link from "next/link";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const HeroTxt = () => {
    return (
        <section className="h-screen container mx-auto flex flex-col justify-center lg:px-0">
            <div className="flex flex-col lg:items-start laptop:items-start items-center lg:justify-start laptop:justify-start justify-center lg:text-9xl laptop:text-8xl text-7xl text-white font-extrabold italic lg:text-opacity-100 laptop:text-opacity-100 text-opacity-50">
                <p className="slideIn1">FUEL</p>
                <p className="slideIn2">YOUR</p>
                <p className="slideIn3">PASSION</p>
            </div>
            <Link href="/about"
                className="group border bg-red-800 lg:bg-opacity-100 laptop:bg-opacity-100 bg-opacity-80 lg:border-none laptop:border-none border-red-800 lg:bg-gradient-to-r laptop:bg-gradient-to-r from-yellow-300 to-red-700 text-center text-lg text-white px-4 py-2 mt-16 lg:w-1/3 laptop:w-1/3 w-4/5 lg:mx-0 laptop:mx-0 mx-auto rounded-md cursor-pointer flex justify-center">
                Join the<span className="font-black tracking-wider text-xl ml-1.5">Revolution</span>
                <div className="ml-1.5 group-hover:translate-x-4 duration-300 transition-all">
                    <ArrowForwardRoundedIcon />
                </div>
            </Link>
        </section>
    );
}

export default HeroTxt;