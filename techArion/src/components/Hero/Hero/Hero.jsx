import React, { useEffect, useState } from 'react'
import hero from '../../../assets/hero.png'
import hero2 from '../../../assets/hero2.png'
import hero3 from '../../../assets/hero3.png'
import herotext from '../../../assets/hero-text.png'
import './Hero.css'

const images = [hero, hero2, hero3];
images.forEach(image => {
    new Image().src = image;
  });

const Hero = () => {
    const [curImg, setCurImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurImg(img => (img + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative he'>
            <img className='hero' src={images[curImg]} alt="hero" />
            <div className='hero-flex'>
                <img className='hero-text-font' src={herotext} />
                <br></br>
                <div className='hero-text-font-two'>The Barn is a global food experience and our dessert</div>
                <div className='hero-text-font-three'>bar is legendary!</div>
                <br></br>
                <button className='hero-text-font-four'>Contact Us</button>
            </div>
        </div>
    )
}

export default Hero