import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable"
});

export default function Home() {
  return (
    <main>
      <video id="background-video" autoPlay muted style={{}} className='lg:block hidden fixed top-0 -z-10 h-screen w-screen object-cover' loop>
        <source src="/videos/desktop/one.mp4" type="video/mp4" />
      </video>
      <video id="background-video" autoPlay muted style={{}} className='block lg:hidden fixed top-0 -z-10 h-screen w-screen object-cover' loop>
        <source src="/videos/mobile/one.mp4" type="video/mp4" />
      </video>
      <div className="h-screen container mx-auto flex flex-col justify-center">
        <div className="flex items-center lg:justify-start justify-center lg:text-9xl text-7xl text-white font-extrabold italic">
          <span className={open_sans.className}>
            <p>FUEL</p>
            <p>YOUR</p>
            <p>PASSION</p>
          </span>
        </div>
        <Link href="/about"
          className="group bg-gradient-to-r from-yellow-300 text-center to-red-700 text-lg text-white px-4 py-2 mt-16 lg:w-1/3 w-4/5 lg:mx-0 mx-auto rounded cursor-pointer flex justify-center">
          Join the<span className="font-black tracking-wider text-xl ml-1.5">Revolution</span>
          <div className="ml-1.5 group-hover:translate-x-4 duration-300 transition-all">
            <ArrowForwardRoundedIcon />
          </div>
        </Link>
      </div>
    </main>
  );
};
