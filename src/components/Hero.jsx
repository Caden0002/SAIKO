import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import HeroBackground from '/herobackgroundcleardarken.png';
import SaikoLogo from '/SaikoLogo.png'; 
import SaikoFood from '/Food.png'; 
import SaikoBooks from '/Books.png';  
import SaikoToys from '/Toys.png'; 
import SaikoMusic from '/Music.png'; 
import SaikoMovies from '/Movies.png'; 
import SaikoGames from '/Games.png'; 
import animationData from '../../lottie/heromobilearrow.json'; 

function Hero(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        // Initial check
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const darkenState = {
        filter: 'brightness(70%)', // Initial filter for darkening
        transition: 'filter 0.3s ease', // Smooth transition effect
    };

    const imageHoverStyle = {
        ...darkenState,
        transition: 'filter 0.3s ease, transform 0.3s ease',
    };

    if (isMobile) {
        return (
            <div className="flex flex-col items-center" style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                {/* SaikoLogo */}
                <div className="w-4/4 h-screen flex flex-col justify-center items-center">
                    <img src={SaikoLogo} alt="Saiko Logo" className="w-full cursor-pointer" />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-4 pointer-events-none">
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={50}
                        width={50}
                    />
                </div>
                </div>

                {/* Lottie animation */}


                {/* SaikoFood image */}
                <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mt-24 mb-24">
                    <img src={SaikoFood} alt="Saiko Food" className="w-full cursor-pointer" />
                </div>

                {/* SaikoBooks image */}
                <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24">
                    <img src={SaikoBooks} alt="Saiko Books" className="w-full cursor-pointer" />
                </div>

                {/* SaikoToys image */}
                <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24">
                    <img src={SaikoToys} alt="Saiko Toys" className="w-full cursor-pointer" />
                </div>

                {/* SaikoMusic image */}
                <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24">
                    <img src={SaikoMusic} alt="Saiko Music" className="w-full cursor-pointer" />
                </div>

                {/* SaikoMovies image */}
                <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24">
                    <img src={SaikoMovies} alt="Saiko Movies" className="w-full cursor-pointer" />
                </div>

                {/* SaikoGames image */}
                <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24">
                    <img src={SaikoGames} alt="Saiko Games" className="w-full cursor-pointer" />
                </div>
            </div>
        );
    }

    // Desktop view (non-mobile)
    return (
        <div className="grid grid-cols-10 grid-rows-10 min-h-screen" style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* SaikoFood image */}
            <div className="col-start-2 row-start-1 col-span-2 row-span-4 flex justify-center items-end">
                <img src={SaikoFood} alt="Saiko Food" className="w-3/4 h-3/4 cursor-pointer" style={imageHoverStyle} 
                    onMouseEnter={(e) => {
                        e.target.style.filter = 'brightness(100%)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(70%)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {/* SaikoBooks image */}
            <div className="col-start-5 row-start-1 col-span-2 row-span-4 flex justify-center items-center">
                <img src={SaikoBooks} alt="Saiko Books" className="w-3/4 h-3/4 cursor-pointer" style={imageHoverStyle} 
                    onMouseEnter={(e) => {
                        e.target.style.filter = 'brightness(100%)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(70%)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {/* SaikoToys image */}
            <div className="col-start-8 row-start-1 col-span-2 row-span-4 flex justify-center items-end">
                <img src={SaikoToys} alt="Saiko Toys" className="w-3/4 h-3/4 cursor-pointer" style={imageHoverStyle} 
                    onMouseEnter={(e) => {
                        e.target.style.filter = 'brightness(100%)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(70%)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {/* SaikoMusic image */}
            <div className="col-start-2 row-start-7 col-span-2 row-span-4 flex justify-center">
                <img src={SaikoMusic} alt="Saiko Music" className="w-3/4 h-3/4 cursor-pointer" style={imageHoverStyle} 
                    onMouseEnter={(e) => {
                        e.target.style.filter = 'brightness(100%)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(70%)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {/* SaikoMovies image */}
            <div className="col-start-5 row-start-7 col-span-2 row-span-4 flex justify-center items-center">
                <img src={SaikoMovies} alt="Saiko Movies" className="w-3/4 h-3/4 cursor-pointer" style={imageHoverStyle} 
                    onMouseEnter={(e) => {
                        e.target.style.filter = 'brightness(100%)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(70%)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {/* SaikoGames image */}
            <div className="col-start-8 row-start-7 col-span-2 row-span-4 flex justify-center">
                <img src={SaikoGames} alt="Saiko Games" className="w-3/4 h-3/4 cursor-pointer" style={imageHoverStyle} 
                    onMouseEnter={(e) => {
                        e.target.style.filter = 'brightness(100%)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(70%)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {/* SaikoLogo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={SaikoLogo} alt="Saiko Logo" className="max-w-full max-h-full" />
            </div>
        </div>
    );
}

export default Hero;
