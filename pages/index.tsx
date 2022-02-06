import type { NextPage } from 'next'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useState } from 'react'

const Home: NextPage = () => {
  const [reviews, setReviews] = useState(
    [{
      "name": "Arvin",
      "review": "I honestly had been matched with the most amazing tutor that i could ever find. He has helped me grow so much as a person and in my studies. I am going to further my studies in California now and it's all my tutors effort to get me to where i am today."
    },
    {
      "name": "Li & Charlene",
      "review": "I honestly had been matched with the most amazing tutor that i could ever find. He has helped me grow so much as a person and in my studies. I am going to further my studies in California now and it's all my tutors effort to get me to where i am today."
    }, {
      "name": "Qi En",
      "review": "I honestly had been matched with the most amazing tutor that i could ever find. He has helped me grow so much as a person and in my studies. I am going to further my studies in California now and it's all my tutors effort to get me to where i am today."
    }]
  )

  return (
    <>
      <NavBar />
      <div className='w-full flex justify-center'>
        <div className='absolute py-80'>
          <div className='flex justify-center font-semibold text-8xl text-purple-400 pb-6'>
            Swipe Right Tutor
          </div>
          <div className='flex justify-center'>
            <button className='flex justify-center rounded-full bg-red-300 text-lg font-normal text-white px-6 py-2'>
              CREATE ACCOUNT
            </button>
          </div>
        </div>
        <img src='https://tinder.com/static/build/4edddaa088aa0b1f49a8f7914549a6ea.webp' alt='students' className='w-full' height=""></img>
      </div>
      <div className='px-20'>
        <div className='pt-10 pb-20 flex flex-row gap-4 text-5xl'>
          {reviews.map((review, id) => {
            return (
              <div key={id} className='border rounded-md shadow text-red-800 px-6 py-4'>
                <div className='flex flex-row justify-between'>
                  <div className='border-b-2 font-bold text-xl pb-2 pr-40'>
                    {review.name}
                  </div>
                  <div className='width-1/4'>
                    <img src="https://img.icons8.com/officel/16/000000/quote-right.png" width={40} height={40} />
                  </div>
                </div>
                <div className='text-base font-extralight py-6'>
                  {review.review}
                </div>
              </div>
            )
          })}
        </div>
        <Footer />
        <div className='py-8 flex justify-center'>
          © 2022 Tudor Group, All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Home
