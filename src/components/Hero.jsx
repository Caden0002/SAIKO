import React from 'react';
import HeroBackground from '/herobackgroundcleardarken.png';
import SaikoLogo from '/SaikoLogo.png'; // Assuming the path is relative to the current file
import SaikoFood from '/Food.png'; // Assuming the path is relative to the current file
import SaikoBooks from '/Books.png'; // Assuming the path is relative to the current file
import SaikoToys from '/Toys.png'; // Assuming the path is relative to the current file
import SaikoMusic from '/Music.png'; // Assuming the path is relative to the current file
import SaikoMovies from '/Movies.png'; // Assuming the path is relative to the current file
import SaikoGames from '/Games.png'; // Assuming the path is relative to the current file

function Hero(props) {
    const darkenState = {
        filter: 'brightness(70%)', // Initial filter for darkening
        transition: 'filter 0.3s ease', // Smooth transition effect
    };

    const imageHoverStyle = {
        ...darkenState,
        transition: 'filter 0.3s ease, transform 0.3s ease',
    };

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
