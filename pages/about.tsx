import NavBar from "../components/NavBar"

const About = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col">
                <div className="flex flex-row gap-8 px-16 py-20 text-gray-600 bg-purple-200">
                    <div className="flex flex-col gap-12 w-1/4">
                        <div className="flex justify-center border-inherit shadow-2xl rounded-full bg-white">
                            <img width={180} height={180} src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143708/1113-768x591.png" alt="Cool design" />
                        </div>
                        <div className="flex justify-center border-inherit shadow-2xl rounded-full bg-white">
                            <img width={180} height={180} src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143708/1113-768x591.png" alt="Cool design" />
                        </div>
                    </div>
                    <div className="flex w-3/4 flex-row justify-evenly text-gray-600">
                        <div className="flex justify-center py-4 px-4 border-inherit shadow-2xl rounded-xl bg-white">
                            <img width={400} height={400} src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143711/1211-768x591.png" alt="Bigger card" />
                        </div>
                        <div className="flex justify-center py-4 px-4 border-inherit shadow-2xl rounded-xl bg-white">
                            <img width={400} height={400} src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143711/1211-768x591.png" alt="Bigger card" />
                        </div>
                    </div>
                </div>

                <div className="px-16">
                    <div className="flex justify-center border-purple-300 border-b-2 font-serif font-semibold text-2xl text-purple-300 py-6">
                        <div className="w-1/3 text-center">
                            WE ARE YOUR GATEWAY TO THE TUTOR-VERSE
                        </div>
                    </div>
                    <div className="flex justify-center text-purple-500 font-bold text-4xl pt-3">
                        TUDOR
                    </div>
                </div>
            </div>
        </>
    )
}

export default About