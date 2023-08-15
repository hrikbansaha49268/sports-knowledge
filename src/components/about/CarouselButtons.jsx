import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CarouselButtons = ({ setDir, isDisabled }) => {
    return (
        <div className="w-full absolute top-0 h-full overflow-x-hidden">
            <div className={`flex ${isDisabled.bwd ? "flex-row-reverse" : "flex-row"} justify-between h-full`}>
                <button className={`w-fit active:scale-95 duration-300 ease-in-out cursor-pointer 
                                ${isDisabled.bwd ? "hidden" : "block laptop:-translate-x-16 lg:-translate-x-16 group-hover:translate-x-0"}`}
                    onClick={() => setDir("left")}>
                    <div className="bg-black lg:py-4 px-2 lg:px-3 py-2 lg:block hidden">
                        <ArrowBackIosNewRoundedIcon sx={{ color: "white" }} fontSize="large" />
                    </div>
                    <div className="bg-black lg:py-4 px-2 laptop:px-3 lg:px-3 py-2 lg:hidden">
                        <ArrowBackIosNewRoundedIcon sx={{ color: "white" }} />
                    </div>
                </button>
                <button className={`w-fit active:scale-95 duration-300 ease-in-out cursor-pointer 
                                ${isDisabled.fwd ? "hidden" : "block laptop:translate-x-16 lg:translate-x-16 group-hover:translate-x-0"}`}
                    onClick={() => setDir("right")}>
                    <div className="bg-black lg:py-4 px-2 laptop:px-3 lg:px-3 py-2 lg:block hidden">
                        <ArrowForwardIosRoundedIcon sx={{ color: "white" }} fontSize="large" />
                    </div>
                    <div className="bg-black lg:py-4 px-2 lg:px-3 py-2 lg:hidden">
                        <ArrowForwardIosRoundedIcon sx={{ color: "white" }} />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default CarouselButtons;