import React from 'react'

import Slide from 'react-reveal/Slide';

import hottestApi from './hottestApi'
import Hottest from './hottest';

import kingsData from './kingscollectiondata';
import { Link } from 'react-router-dom';
import KingsComponent from './kingsComponent';

export default function AllKingsCollection() {
    return (
        <div className='w-[90%] mx-auto'>

            <div className='w-[90%] mx-auto my-6 flex justify-between  h-[50px]'>
                <div className='bg-blue-400 h-full w-[20%]'></div>
                <div className='w-[40%]'><h1 className='text-center text-blue-400 text-xl md:text-3xl h-full p-2 font-bold'>FEET OF THE KINGS</h1></div>
                <div className='bg-blue-400 h-full w-[20%]'></div>
            </div>
            <div class=" md:grid md:grid-cols-4 grid grid-cols-2  justify-between md:w-full w-full  gap-4 my-7">


                {kingsData.slice(0, 12).map((item) => (

                    <KingsComponent

                        title={item.title}
                        key={item.id}
                        id={item.id}
                        pricing={item.pricing}
                        qty={item.qty}
                        image={item.image}
                        alt={item.alt}
                        size={item.size}
                    />
                ))

                }
            </div>
            <div class=" md:grid md:grid-cols-4 grid grid-cols-2  justify-between md:w-full w-full  gap-4 my-7">
                <Slide right>
                    <div class="bg-white w-full md:w-[200px] h-ful pl-3 mx-auto mb-8">
                        <Link to="/allLeatherShoes"><h1 className=' text-center text-[30px] p-6 font-bold text-blue-400'> LORDS OF THE LEATHER</h1></Link> 
                        <div className='px-6 hidden md:block'><button className='w-full'>More!</button></div>

                    </div>
                    {hottestApi.slice(0, 3).map(({
                        id,
                        title,
                        image,
                        pricing,
                        alt,
                        qty,
                        size,
                    }) => (
                        <Hottest
                            key={id}
                            id={id}
                            title={title}
                            pricing={pricing}
                            qty={qty}
                            image={image}
                            alt={alt}
                            size={size}
                        />
                    ))}
                </Slide></div>

        </div>
    )
}