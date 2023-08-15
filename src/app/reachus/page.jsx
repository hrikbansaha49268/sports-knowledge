import { Open_Sans } from "next/font/google";

import QuerySubmit from "@/components/contact/QuerySubmit";
import ContactDetails from "@/components/contact/ContactDetails";

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
                <section className="flex lg:flex-row laptop:flex-row flex-col lg:container laptop:w-3/4 mx-auto lg:h-[50vh] laptop:h-full border-2 lg:mt-16 my-8">
                    <ContactDetails />
                    <QuerySubmit />
                </section>
            </div>
        </main >
    );
}

export default ReachUs;