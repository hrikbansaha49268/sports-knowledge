import Image from "next/image";

const MethodList = () => {
    return (
        <div className="lg:h-[70vh] laptop:h-[60vh] relative mb-4 hover:shadow-xl duration-300 ease-in-out flex justify-between">
            <div className="w-full absolute z-0 h-full">
                <Image src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="lg:block laptop:block hidden object-cover object-top h-full brightness-50 bg-black"
                    width={3000} height={2500} alt="" />
                <Image src="https://images.pexels.com/photos/15057323/pexels-photo-15057323/free-photo-of-people-running-in-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="block lg:hidden laptop:hidden object-cover object-top h-full brightness-[0.4] grayscale bg-black"
                    width={3000} height={2500} alt="" />
            </div>
            <div className="flex flex-col justify-center text-white lg:px-8 z-20 lg:m-auto laptop:m-auto mx-auto mt-8 w-3/4">
                <p className="lg:text-9xl laptop:text-7xl text-5xl font-black self-start lg:text-center text-center w-full lg:mt-0">METHODS</p>
                <ul className="grid lg:grid-cols-2 laptop:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 font-light lg:w-3/4 laptop:w-3/4 text-3xl text-center h-full mx-auto my-8">
                    <li className="laptop:text-center">
                        <span className="font-black">1</span>. STRENGTH
                    </li>
                    <li className="laptop:text-center">
                        <span className="font-black">2</span>. ATHLETIC
                    </li>
                    <li className="laptop:text-center">
                        <span className="font-black">3</span>. ZUMBA
                    </li>
                    <li className="laptop:text-center">
                        <span className="font-black">4</span>. KICK BOXING
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MethodList;