"use client";
import Image from 'next/image';
import HeroButton  from './HeroButton';

const Hero = () => {
    const handleScroll = () => {
        
    }

  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">Discover, reserve, or lease a vehicle -- effortlessly and in no time!
            </h1>
            <p className="hero__subtitle">
            Simplify your car rental journey with our straightforward reservation procedure.
            </p>

            <HeroButton 
            title="Discover Cars"
            containerStyles="bg-primary-blue text-white 
            rounded-full mt-10" 
            handleClick={handleScroll}
            />

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image  src="/hero.png" 
                    alt='hero' fill className='object-contain'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero