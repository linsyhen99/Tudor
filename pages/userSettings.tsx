const UserSettings = () => {
    return (
        <div className="flex justify-center w-full h-full pt-40">
            <div className="flex flex-col">
                <div className="text-md font-normal border-b-2 border-purple-300 px-8">
                    There is nothing much to see here so i suggest you go back to swiping
                </div>
                <div className="py-1"></div>
                <a className="rounded-lg flex justify-center pt-4 pb-2 text-lg font-semibold bg-gradient-to-r from-indigo-400 hover:text-white" href="/swipe">
                    Take me back. Please...
                </a>
            </div>

        </div>
    )
}

export default UserSettings