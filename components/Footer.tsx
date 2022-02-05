const Footer = () => {
    return (
        <>
            <div className="relative h-40 w-full">
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-5 justify-right border-b-2">
                    <div className="flex flex-col pt-2 pl-10">
                        <p className="text-lg font-bold pb-2">
                            LEGAL
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-1">
                            Privacy
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-1">
                            Terms
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-1">
                            Cookie Policy
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-4">
                            Intellectual Property
                        </p>
                    </div>
                    <div className="">
                        <p className="text-lg font-bold gap-10 pb-2">
                            CAREERS
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-1">
                            Careers portal
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 pb-1">
                            <a href="" className="hover:text-purple-500">
                                Tech Blog
                            </a>
                        </p>
                    </div>
                    <div >
                        <p className="text-lg font-bold gap-10 pb-2">
                            SOCIAL
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a onClick={() => window.open('https://www.instagram.com/a_ikea_/')?.focus}>
                                <img src="https://img.icons8.com/ios/24/000000/instagram-new--v1.png" width={25} height={25} />
                            </a>

                            <a onClick={() => window.open('https://twitter.com/solanafm')?.focus}>
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" width={25} height={25} />
                            </a>

                            <a onClick={() => window.open('https://www.facebook.com/')?.focus}>
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" width={25} height={25} />
                            </a>
                            <a onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')?.focus} >
                                <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-1">
                            FAQ
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500 pb-1">
                            Contact
                        </p>
                        <p className="cursor-pointer text-md font-light gap-10 hover:text-purple-500">
                            Promo code
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer