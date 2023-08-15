import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactDetails = () => {
    return (
        <div className="lg:w-1/2 laptop:w-1/2 hover:bg-gray-200 duration-200 ease-in-out lg:border-r-2 laptop:border-r-2 border-r-0 lg:border-b-0 laptop:border-b-0 border-b-2 lg:px-0 px-4">
            <div className="lg:w-3/4 mx-auto laptop:w-3/4 h-full flex flex-col justify-center">
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
    );
}

export default ContactDetails;