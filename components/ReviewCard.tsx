import { useState } from 'react'

const ReviewCard = () => {
    const [reviews, setReviews] = useState(
        [{
            "name": "Arvin",
            "review": "I honestly had been matched with the most amazing tutor that i could ever find. He has helped me grow so much as a person and in my studies. I am going to further my studies in California now and it's all my tutors effort to get me to where i am today.",
            "tutee": "Ruwan"
        },
        {
            "name": "Li & Charlene",
            "review": "I honestly had been matched with the most amazing tutor that i could ever find. He has helped me grow so much as a person and in my studies. I am going to further my studies in California now and it's all my tutors effort to get me to where i am today.",
            "tutee": "Ruwan"

        }, {
            "name": "Qi En",
            "review": "I honestly had been matched with the most amazing tutor that i could ever find. He has helped me grow so much as a person and in my studies. I am going to further my studies in California now and it's all my tutors effort to get me to where i am today.",
            "tutee": "Ruwan"
        }]
    )

    return (
        <>
            <div className='pt-10 pb-20 flex flex-row gap-10 text-5xl'>
                {reviews.map((review, id) => {
                    return (
                        <div key={id} className='border rounded-md shadow text-red-800 px-6 py-4'>
                            <div className='flex flex-row justify-between'>
                                <div className='border-b-2 font-bold text-xl pb-2 pr-30 w-3/4'>
                                    {review.name}
                                </div>
                                <div className='width-1/4'>
                                    <img src="https://img.icons8.com/officel/16/000000/quote-right.png" width={40} height={40} />
                                </div>
                            </div>
                            <div className='text-base font-extralight py-6'>
                                {review.review}
                            </div>
                            <div className='flex justify-end pb-4 text-base font-extralight'>
                                Tutee: {review.tutee}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ReviewCard