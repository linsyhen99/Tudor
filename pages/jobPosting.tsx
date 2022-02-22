import NavBar from "../components/NavBar"

const jobPosting = () => {
    return (
        <>
            <NavBar />
            <div className="px-12 h-screen w-full bg-purple-200">
                <div className="flex justify-end pr-48 pt-20 pb-6">
                    <button className="px-10 py-4 shadow rounded-full font-semibold text-lg bg-purple-400">
                        Post New Job +
                    </button>
                </div>
                <div className="flex justify-start">
                    <div className="text-white text-2xl font-bold rounded-sm px-10 py-4">
                        Job Assignments
                    </div>
                </div>
            </div>
        </>
    )
}

export default jobPosting