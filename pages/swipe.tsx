import { useState } from 'react'
import TinderCard from 'react-tinder-card'

const Main = () => {
    const [myIdentifier, setMyIdentifier] = useState("Ruwan");

    const onSwipe = (direction: string) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <>
            <div className='text-red-600 flex flex-col justify-center bg-red-200 pt-100 h-screen'>
                <div className='w-full'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center'>
                            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen(myIdentifier)} preventSwipe={['up', 'down']}>
                                <img className='rounded-md' src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png" alt="Image" width={200} height={200} />
                                <div className='flex justify-center text-red-600 pt-3'>
                                    Tinder card
                                </div>
                            </TinderCard>
                        </div>
                        <div className='flex flex-row gap-10 justify-center pt-8'>
                            <button className='shadow border rounded-md px-6 py-3 bg-purple-200 font-normal text-md'>Swipe Left</button>
                            <button className='shadow border rounded-md px-6 py-3 bg-purple-200 font-normal text-md'>Swipe Right</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main