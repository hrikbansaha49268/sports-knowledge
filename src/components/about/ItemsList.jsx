import AboutItem from "./AboutItem";

const ItemsList = ({ referenceList }) => {
    return (
        <div className="flex flex-row overflow-x-hidden snap-x lg:space-x-4 laptop:space-x-3 laptop:my-8 lg:my-8 box-box">
            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={referenceList[0]}>
                <AboutItem
                    colorScheme={"bg-[#1b1f21]"}
                    imgSrc={"https://images.unsplash.com/photo-1592632789004-57d4354f2499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
                    txtColor={"text-white"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                    title={"STRENGTH"} />
            </div>
            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={referenceList[1]}>
                <AboutItem
                    colorScheme={"bg-[#585858]"}
                    imgSrc={"https://images.unsplash.com/photo-1618999930306-1f423ac5cbed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
                    txtColor={"text-white"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                    title={"ATHLETIC"} />
            </div>
            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={referenceList[2]}>
                <AboutItem
                    colorScheme={"bg-orange-100"}
                    imgSrc={"https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    txtColor={"text-neutral-800"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                    title={"ZUMBA"} />
            </div>
            <div className="flex-shrink-0 lg:mx-8 laptop:mx-8 w-full" ref={referenceList[3]}>
                <AboutItem
                    colorScheme={"bg-gradient-to-br to-[#bb9430] from-red-700 lg:py-0 py-4"}
                    imgSrc={"https://images.unsplash.com/photo-1611816153165-fed23698666d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    txtColor={"text-white"} orientation={"lg:flex-row laptop:flex-row flex-col-reverse"}
                    title={"KICK BOXING"} />
            </div>
        </div>
    );
}

export default ItemsList;