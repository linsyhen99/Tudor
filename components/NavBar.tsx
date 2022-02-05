const NavBar = () => {
    return (
        <div className="flex flex-wrap">
            <div className="text-white h-20 w-1/2 bg-black px-8 py-4 text-lg">
                <div className="flex flex-row gap-16 pt-2 text-white">
                    <button className="font-medium text-red-500 text-3xl font-bold">
                        Tudor
                    </button>
                    <div className="pt-2 font-light">
                        About Us
                    </div>
                    <div className="pt-2 font-light">
                        Safety
                    </div>
                    <div className="pt-2 font-light">
                        Team
                    </div>
                </div>
            </div>
            <div className="grid justify-items-end bg-black w-1/2 py-5 px-8">
                <button className="rounded-md font-medium text-lg bg-gray-200 text-red-700 px-8">
                    Log in
                </button>
            </div>
        </div>
    )
}

export default NavBar 