import React from 'react'
import './HeroTwo.css'
import table from '../../../assets/table.png'
import chair from '../../../assets/chair.png'
import hifen from '../../../assets/hifen.png'
import rotate from '../../../assets/rotate.png'

const HeroTwo = () => {
  return (
    <div className='hero-two'>
        <div className='hero-two-text-container'>
            <div className='hifen'>
        <img src={hifen} />
        <img src={hifen} />
            </div>
        <div className='hero-two-text'>
            Experiecne culinary excellence at our restaurant
        </div>
        <div>
            Book your table today and get ready to indulge in
        </div>
        <div>
            a delightful dining experience!!
        </div>
        <img className='table' src={table} />
        <img className='chair' src={chair} />
        <img className='rotate' src={rotate} />
        </div>
    </div>
  )
}

export default HeroTwo