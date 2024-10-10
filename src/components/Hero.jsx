import React from 'react'
import {HERO} from '../constants'
import image from "../assets/myphoto.png"
const Hero = () => {
  return (
   <section className='flex min-h-screen flex-wrap items-center'>
        <div className='w-full md:w-1/2'>
        <h2 className='my-8 p-2 text-3xl font-bold md:text-6xl lg:text-[5rem]'>
          {HERO.name}
        </h2>
       <p className='p-2 text-2xl tracking-tighter lg:text-3xl '>
        {HERO.greet}
       </p>
       <p className='mb-8 p-5 text-xl'>
        {HERO.description}
       </p>
       <div className='w-full md:w-1/2 lg:p-8'>
       </div>

        </div>
       <div className='flex  justify-center px-11'>
        <img src={image} width={440} height={440} alt='vikas' className='rounded-3xl'></img>
       </div>
   </section>
  )
}

export default Hero
