import React from 'react'
import './HeroThree.css'
import lgfood from '../../../assets/lgfood.png'
import delightcake from '../../../assets/delightcake.png'
import love from '../../../assets/love.png'
import videoplay from '../../../assets/videoplay.png'
import star from '../../../assets/star.png'
import k from '../../../assets/k.png'
import like from '../../../assets/like.png'
import delightcard from '../../../assets/delightcard.png'
import foodcircle from '../../../assets/circlefood.png'
import foo1 from '../../../assets/foods/foo1.png'
import foo2 from '../../../assets/foods/foo2.png'
import foo3 from '../../../assets/foods/foo3.png'
import foo4 from '../../../assets/foods/foo4.png'

const HeroThree = () => {
  return (
    <div className='hero-three '>
        <div>
            <div>
         <img className='relative' src={foodcircle} />
        <img className='absolute top-28 left-52' src={lgfood} />
            </div>
        <div className='delight-text-container'>
            <div className='flex items-center my-3'>
                <div>#MostLovedDish</div>
                <img className='m-1' src={love} />
                </div>
            <img src={delightcake} />
            <div className='flex items-center my-5'>
                <img className='mr-2' src={videoplay} />
                <div>Play Video</div>
            </div>
            <button className='bg-white px-4 py-2 text-black rounded-3xl text-xl'>Order Now</button>
            <button className='bg-white px-4 py-2 text-black rounded-3xl text-xl ml-4'>View Menu</button>
        </div>

        <div className='delight-card'>
            <div className='flex text-xl mt-4'>
                <div className='ml-5 text-xl'>Overview</div>
                <div className='mx-4'>|</div> 
                <div className='text-gray-400 opacity-50'>Incredients</div>
            </div>
            <img className='mt-7 mb-3' src={delightcard} />
            <div className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standar</div>
            <div className='flex mt-10'>
            <button className='flex bg-current px-4 py-1 rounded-3xl'>
                <img className='mr-2' src={like} />
                <div className='text-black'>345</div>
            </button>
            <div className='flex m-1 ml-12 w-12 h-5'>
                <img className='mr-1' src={star} />
                <img className='mr-1' src={star} />
                <img className='mr-1' src={star} />
                <img className='mr-1' src={star} />
                <img className='mr-1' src={star} />
                <img src={k} />
            </div>
            </div>
        </div>

        <div className='small-delight-card relative flex items-center top-60 left-1/4 '>
            <div className='m-6 w-36 h-56 bg-white rounded-3xl flex flex-col justify-center items-center'>
            <img src={foo1} />
            <div className='text-black m-3'>Delight Cake</div>
            </div>
            <div className='m-12'>
            <img src={foo2} />
            <div>Asian Winch</div>
            </div>
            <div className='m-12'>
            <img src={foo3} />
            <div>Malayi Cheese</div>
            </div>
            <div className='m-12'>
            <img src={foo4} />
            <div>Elite Gineey</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroThree