import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import NavBar from '../components/NavBar'

const Main = () => {
    const [myIdentifier, setMyIdentifier] = useState("Ruwan");

    const onSwipe = (direction: string) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen')
    }

    const [characters, setCharacters] = useState([
        {
            "name": "Tahj Mabols",
            "url": "https://archive.org/download/AlgorithmsLecturebyAbdulBari/AlgorithmsLecturebyAbdulBari.thumbs/1.%20Introduction%20to%20Algorithms_000450.jpg"
        },
        {
            "name": "Tahj Mabols",
            "url": "https://archive.org/download/AlgorithmsLecturebyAbdulBari/AlgorithmsLecturebyAbdulBari.thumbs/1.%20Introduction%20to%20Algorithms_000450.jpg"
        },
        {
            "name": "Tahj Mabols",
            "url": "https://archive.org/download/AlgorithmsLecturebyAbdulBari/AlgorithmsLecturebyAbdulBari.thumbs/1.%20Introduction%20to%20Algorithms_000450.jpg"
        },
        {
            "name": "Tahj Mabols",
            "url": "https://archive.org/download/AlgorithmsLecturebyAbdulBari/AlgorithmsLecturebyAbdulBari.thumbs/1.%20Introduction%20to%20Algorithms_000450.jpg"
        }
    ])

    const renderCharacters = () => {
        console.log("rendering characteres")
        return (
            <>
                {characters.map((character, id) => {
                    <TinderCard key={id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen(myIdentifier)} preventSwipe={['up', 'down']}>
                        <div className='flex flex-col relative'>
                            <img className='rounded-xl' src={character.url} alt="Image" width={500} height={500} />
                            <div className='absolute bottom-0 left-0 flex justify-center text-white text-4xl py-6 px-6 font-bold'>
                                {character.name}
                            </div>
                        </div>
                    </TinderCard>
                })}
            </>
        )
    }

    return (
        <>
            <NavBar />
            <div className='text-red-600 flex flex-col justify-center bg-red-200 pt-100 h-screen'>
                <div className='w-full'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center'>
                            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen(myIdentifier)} preventSwipe={['up', 'down']}>
                                <div className='flex flex-col relative'>
                                    <img className='rounded-xl' src='https://archive.org/download/AlgorithmsLecturebyAbdulBari/AlgorithmsLecturebyAbdulBari.thumbs/1.%20Introduction%20to%20Algorithms_000450.jpg' alt="Image" width={500} height={500} />
                                    <div className='absolute bottom-0 left-0 flex justify-center text-white text-4xl py-6 px-6 font-bold'>
                                        Rahj Gopal
                                    </div>
                                </div>
                            </TinderCard>
                        </div>
                        <div className='flex flex-row gap-10 justify-center pt-8'>
                            <button className='shadow-xl border-native rounded-md px-6 py-3 bg-purple-200 font-normal text-md'>Swipe Left</button>
                            <button className='shadow-xl border-native rounded-md px-6 py-3 bg-purple-200 font-normal text-md'>Swipe Right</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main