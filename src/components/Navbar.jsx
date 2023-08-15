import { useScrollDirection } from '@/utils/scroller';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathName = usePathname();
    const direction = useScrollDirection();

    return (
        <nav className={`bg-transparent fixed top-0 lg:mt-8 laptop:mt-8 z-50 w-full ${direction === "up" ? 'translate-y-0' : '-translate-y-64'} duration-300 ease-in-out font-black italic uppercase`}>
            <div className="flex lg:justify-around laptop:justify-around justify-around lg:text-base laptop:text-base text-xs items-center container lg:w-full laptop:w-4/5 mx-auto text-white">
                <Link href="/"
                    className={`${pathName === '/reachus' ? 'hover:bg-black' : 'bg-white'} text-black lg:py-4 laptop:py-4 py-2 text-center w-full hover:bg-opacity-50 duration-200 ease-in-out`}>
                    Home
                </Link>
                <Link href="/about"
                    className={`
                    ${pathName === "/about" ? "bg-black bg-opacity-30" : "bg-white text-black"}
                     ${pathName === "/reachus" ? "hover:bg-black" : null} lg:py-4 laptop:py-4 py-2 text-center w-full hover:bg-opacity-50 duration-200 ease-in-out`}>
                    How We Work
                </Link>
                <Link
                    href="/reachus"
                    className={`${pathName === "/reachus" ? "bg-black text-white" : "bg-white text-black"} lg:py-4 laptop:py-4 py-2 text-center w-full hover:bg-opacity-50 duration-200 ease-in-out`}>
                    Reach us
                </Link>
            </div>
        </nav >
    );
}

export default Navbar;