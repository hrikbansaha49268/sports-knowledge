const QuerySubmit = () => {
    return (
        <div className="h-full lg:w-1/2 laptop:w-1/2 hover:bg-gray-200 duration-200 ease-in-out">
            <div className="w-3/4 h-full mx-auto py-8">
                <p className="text-2xl font-black italic my-8 uppercase">Submit Your query</p>
                <form className="flex flex-col justify-between h-3/4">
                    <input type="text" placeholder="Give your name" className="outline-none bg-transparent border-b-2 border-black px-8 py-4 focus:bg-gray-200 focus:bg-opacity-30 rounded-t-md" />
                    <input type="text" placeholder="Give your contact Number" className="outline-none bg-transparent border-b-2 border-black px-8 py-4 focus:bg-gray-200 focus:bg-opacity-30 rounded-t-md" />
                    <input type="email" placeholder="Give your email" className="outline-none bg-transparent border-b-2 border-black px-8 py-4 focus:bg-gray-200 focus:bg-opacity-30 rounded-t-md" />
                    <input type="submit" className="bg-black text-white w-3/4 mx-auto py-4 rounded-lg cursor-pointer font-extrabold italic lg:my-0 laptop:my-8 my-8" value="Click to Reach" />
                </form>
            </div>
        </div>
    );
}

export default QuerySubmit;