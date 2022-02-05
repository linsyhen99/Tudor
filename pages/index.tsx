import type { NextPage } from 'next'
import Head from 'next/head'
import students from '../assets/students.jpeg'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <>
    <NavBar />
          <div className='w-full'>
            <img src='' alt='students' className='w-full' height=""></img>
          </div>
      <div className='px-20'>
        <Footer />
      </div>
    </>
  )
}

export default Home
