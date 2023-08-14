import Link from "next/link";
import { Open_Sans } from "next/font/google";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import './globals.css';

const open_sans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable"
});

export default function Home() {
  return (
    <main className={open_sans.className}>
      <video id="background-video" autoPlay muted style={{}} className='lg:block hidden fixed top-0 -z-10 h-screen w-screen object-cover bg-black' loop>
        <source src="/videos/desktop/one.mp4" type="video/mp4" />
      </video>
      <video id="background-video" autoPlay muted style={{}} className='block lg:hidden fixed top-0 -z-10 h-screen w-screen object-cover bg-black' loop>
        <source src="/videos/mobile/one.mp4" type="video/mp4" />
      </video>
      <div className="h-screen container mx-auto flex flex-col justify-center">
        <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center lg:text-9xl text-7xl text-white font-extrabold italic lg:text-opacity-100 text-opacity-50">
          <p className="slideIn1">FUEL</p>
          <p className="slideIn2">YOUR</p>
          <p className="slideIn3">PASSION</p>
        </div>
        <Link href="/about"
          className="group border bg-red-800 lg:bg-opacity-100 bg-opacity-80 lg:border-none border-red-800 lg:bg-gradient-to-r from-yellow-300 to-red-700 text-center text-lg text-white px-4 py-2 mt-16 lg:w-1/3 w-4/5 lg:mx-0 mx-auto rounded-md cursor-pointer flex justify-center">
          Join the<span className="font-black tracking-wider text-xl ml-1.5">Revolution</span>
          <div className="ml-1.5 group-hover:translate-x-4 duration-300 transition-all">
            <ArrowForwardRoundedIcon />
          </div>
        </Link>
      </div>
    </main>
  );
};
