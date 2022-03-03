import type { NextPage } from 'next'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import ReviewCard from '../components/ReviewCard'

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
            Swipe Right Tutor™
          </div>
          <div className='flex justify-center'>
            <button className='flex justify-center rounded-full bg-red-300 text-lg font-normal text-white px-14 py-3'>
              CREATE ACCOUNT
            </button>
          </div>
        </div>
        <img src='https://tinder.com/static/build/4edddaa088aa0b1f49a8f7914549a6ea.webp' alt='students' className='w-full' height=""></img>
      </div>
      <div className='px-20'>
        <ReviewCard />
        <Footer />
        <div className='py-8 flex justify-center'>
          © 2022 Tudor Group, All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Home
