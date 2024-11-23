import React from 'react'
import LevelOne from './levels/LevelOne';
import LevelTwo from './levels/LevelTwo';
import LevelThree from './levels/LevelThree';


export const Homepage = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
            <div class="flex-1 text-center lg:text-left">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Anthony's React Learning Progression</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">This will simply serve as my learning entries in tackling React.</p>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {/* //#region level one */}
            <label htmlFor="my_modal_1" class="overflow-hidden bg-white shadow cursor-pointer">
                <div class="p-5">
                    <div class="relative">
                        <div class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-[30vh]" src="https://cdn.pixabay.com/photo/2022/08/28/01/34/studio-ghibli-7415572_1280.jpg" alt="" />
                        </div>
                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Level 1 </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> October 27, 2024 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> Passing a props to a component and display it. </a>
                    </p>
                </div>
            </label>

            {/* Modal structure */}
            <input type="checkbox" id="my_modal_1" class="modal-toggle" />
            <div class="modal" role="dialog">
                <div class="modal-box">
                    <LevelOne name={"Anthony"} emoji={"👋"} />
                </div>
                <label class="modal-backdrop" htmlFor="my_modal_1">Close</label>
            </div>
            {/* //#endregion */}

            {/* //#region level two */}
            <label htmlFor="my_modal_2" class="overflow-hidden bg-white shadow cursor-pointer">
                <div class="p-5">
                    <div class="relative">
                        <div class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2022/12/22/18/49/forest-7672785_1280.jpg" alt="" />
                        </div>
                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Level 2 </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> November 3, 2024 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> Mapping an array and display it. </a>
                    </p>
                </div>
            </label>

            {/* Modal structure */}
            <input type="checkbox" id="my_modal_2" class="modal-toggle" />
            <div class="modal" role="dialog">
                <div class="modal-box">
                    <LevelTwo />
                </div>
                <label class="modal-backdrop" htmlFor="my_modal_2">Close</label>
            </div>
            {/* //#endregion */}

            {/* //#region level three */}
            <label htmlFor="my_modal_3" class="overflow-hidden bg-white shadow cursor-pointer">
                <div class="p-5">
                    <div class="relative">
                        <div class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2022/12/22/18/49/summer-7672786_1280.jpg" alt="" />
                        </div>
                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Level 1 </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> November 3, 2024 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> Map an array, pass a props, and display it. </a>
                    </p>
                </div>
            </label>

            {/* Modal structure */}
            <input type="checkbox" id="my_modal_3" class="modal-toggle" />
            <div class="modal" role="dialog">
                <div class="modal-box">
                    <LevelThree />
                </div>
                <label class="modal-backdrop" htmlFor="my_modal_3">Close</label>
            </div>
            {/* //#endregion */}
        </div>
        

        <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

  )
}

export default Homepage;