import React, { useState } from 'react'
import LevelOne from './levels/LevelOne';
import LevelTwo from './levels/LevelTwo';
import LevelThree from './levels/LevelThree';
import LevelFour from './levels/LevelFour';
import LevelFive from './levels/LevelFive';
import LevelSix from './levels/LevelSix';
import TodoList from './mini-projects/todo-list/TodoList';
import LevelSeven from './levels/LevelSeven';
import { Navigate } from 'react-router-dom';
import { NavigateToTodoList } from './navigate/NavigateToTodoList';
import { LevelEight } from './levels/LevelEight';
import { LevelNine } from './levels/LevelNine';

const regions = [ 
    { 
        id: 1, 
        imgSrc: 'https://cdn.pixabay.com/photo/2022/08/28/01/34/studio-ghibli-7415572_1280.jpg', 
        level: 'Level 1', 
        date: 'October 27, 2024', 
        title: 'Passing a props to a component and display it.', 
        Component: <LevelOne name="Anthony" emoji="👋" /> 
    }, 
    { 
        id: 2, 
        imgSrc: 'https://cdn.pixabay.com/photo/2022/12/22/18/49/forest-7672785_1280.jpg', 
        level: 'Level 2', 
        date: 'November 3, 2024', 
        title: 'Mapping an array and display it.', 
        Component: <LevelTwo />,
    },
    {
        id: 3,
        imgSrc: 'https://cdn.pixabay.com/photo/2022/12/22/18/49/summer-7672786_1280.jpg',
        level: 'Level 3',
        date: 'November 3, 2024',
        title: 'Map an array, pass a props, and display it.',
        Component: <LevelThree />,
    },
    {
        id: 4,
        imgSrc: 'https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg',
        level: 'Level 4',
        date: 'November 24, 2024',
        title: 'Conditionally render a content or a component and display it.',
        Component: <LevelFour />,
    },
    {
        id: 5,
        imgSrc: 'https://cdn.pixabay.com/photo/2022/08/28/01/40/cyberpunk-city-7415576_1280.jpg',
        level: 'Level 5',
        date: 'November 26, 2024',
        title: 'Handle an event and display the results.',
        Component: <LevelFive />,
    },
    {
        id: 6,
        imgSrc: 'https://cdn.pixabay.com/photo/2022/09/22/00/34/street-7471408_1280.jpg',
        level: 'Level 6',
        date: 'November 28, 2024',
        title: 'Handle form inputs and display the results.',
        Component: <LevelSix />,
    },
    {
        id: 7,
        imgSrc: 'https://cdn.pixabay.com/photo/2023/02/20/20/44/ai-generated-7803070_1280.jpg',
        level: 'Mini Project 1',
        date: 'December 11, 2024',
        title: 'Creation of Todolist.',
        Component: <NavigateToTodoList />,
    },
    {
        id: 8,
        imgSrc: 'https://cdn.pixabay.com/photo/2023/02/20/20/45/ai-generated-7803075_1280.jpg',
        level: 'Level 7',
        date: 'March 2, 2025',
        title: 'Using useReducer',
        Component: <LevelSeven />,
    },
    {
        id: 9,
        imgSrc: 'https://cdn.pixabay.com/photo/2023/02/20/20/44/ai-generated-7803073_1280.jpg',
        level: 'Level 8',
        date: 'March 18, 2025',
        title: 'Routing using React Router',
        Component: <LevelEight />,
    }, 
    {
        id: 10,
        imgSrc: 'https://img.freepik.com/free-photo/anime-style-clouds_23-2151071795.jpg?t=st=1742530478~exp=1742534078~hmac=bd2fdee8a05d3d5f034bfe84d987d8b553d6ee34577b8d505e6063cd896b2286&w=2000',
        level: 'Level 9',
        date: 'March 23, 2025',
        title: 'Using Context API',
        Component: <LevelNine />,
    },

    //imgSrc: 'https://img.freepik.com/free-photo/anime-style-clouds_23-2151071795.jpg?t=st=1742530478~exp=1742534078~hmac=bd2fdee8a05d3d5f034bfe84d987d8b553d6ee34577b8d505e6063cd896b2286&w=2000',
    //imgSrc: 'https://img.freepik.com/free-photo/cartoon-style-summer-scene-with-beach_23-2151068392.jpg?t=st=1742535542~exp=1742539142~hmac=c25749c60e65d0eea20b608fe4b1d1c007d22220b6fd34647bd627d4dfa7309e&w=996',
    //imgSrc: 'https://img.freepik.com/premium-photo/idyllic-beach-fantastic-day_636537-345028.jpg?w=2000',

];

const ITEMS_PER_PAGE = 3;


export const Homepage = () => {

    const [currentPage, setCurrentPage] = useState(1); 

    // Calculate the number of pages 
    const totalPages = Math.ceil(regions.length / ITEMS_PER_PAGE); 
    
    // Get the regions for the current page 
    const currentRegions = regions.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Anthony's React Learning Progression</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">This will simply serve as my learning entries in tackling React. Just simply click the cards below to view, thanks!</p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <button 
                    type="button" 
                    className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                </button>

                <button 
                    type="button" 
                    className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                    onClick={() => setCurrentPage(prev => Math.max(prev + 1, 1))} 
                    disabled={currentPage === totalPages}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {
                currentRegions.map(region => ( 
                    <React.Fragment key={region.id}> 
                        <label htmlFor={`my_modal_${region.id}`} className="overflow-hidden bg-white shadow cursor-pointer">
                            <div className="p-5"> <div className="relative"> <div className="block aspect-w-4 aspect-h-3"> 
                                <img className="object-cover w-full h-[30vh]" src={region.imgSrc} alt="" /> 
                            </div> 
                            <div className="absolute top-4 left-4"> 
                                <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">{region.level}</span> 
                            </div> 
                            
                            </div> 
                                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{region.date}</span>
                                <p className="mt-5 text-2xl font-semibold"> 
                                    <a href="#" title="" className="text-black">{region.title}</a> 
                                </p> 
                            </div> 
                        </label> 
                    
                    {/* Modal structure */} 
                        <input type="checkbox" id={`my_modal_${region.id}`} className="modal-toggle" /> 
                            <div className="modal" role="dialog"> 
                                <div className="modal-box"> {region.Component} </div> 
                                <label className="modal-backdrop" htmlFor={`my_modal_${region.id}`}>Close</label> 
                            </div> 
                    </React.Fragment> 
            ))}

        
        </div>
        

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button 
                type="button" 
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button 
                type="button" 
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                onClick={() => setCurrentPage(prev => Math.max(prev + 1, 1))} 
                disabled={currentPage === totalPages}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

  )
}

export default Homepage;