import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lottie/heromobilearrow.json';
import SaikoBooks from '/Books.png';
import SaikoFood from '/Food.png';
import SaikoGames from '/Games.png';
import SaikoMovies from '/Movies.png';
import SaikoMusic from '/Music.png';
import SaikoLogo from '/SaikoLogo.png';
import SaikoToys from '/Toys.png';
import HeroBackground from '/herobackgroundcleardarken.png';
import SaikoBGM from '/saikobgm.mp3';

function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(new Audio(SaikoBGM));

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

    useEffect(() => {
        const audio = audioRef.current;

        const updateCurrentTime = () => {
            setCurrentTime(audio.currentTime);
        };

        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('timeupdate', updateCurrentTime);
        audio.addEventListener('loadedmetadata', setAudioData);

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.removeEventListener('timeupdate', updateCurrentTime);
            audio.removeEventListener('loadedmetadata', setAudioData);
        };
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (event) => {
        const audio = audioRef.current;
        const newTime = (event.target.value / 100) * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const darkenState = {
        filter: 'brightness(70%)', // Initial filter for darkening
        transition: 'filter 0.3s ease', // Smooth transition effect
    };

    const imageHoverStyle = {
        ...darkenState,
        transition: 'filter 0.3s ease, transform 0.3s ease',
    };

    const PlayIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
            <path d="M3 22v-20l18 10-18 10z"></path>
        </svg>
    );

    const PauseIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
            <path d="M6 22h4v-20h-4v20zm8-20v20h4v-20h-4z"></path>
        </svg>
    );

    const handleOverlayClick = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <div className="relative">
            {showOverlay && (
                <div
                    className="fixed w-full h-full bg-black bg-opacity-30 z-10 flex justify-center items-center text-white backdrop-blur-md text-5xl"
                    onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    style={{ fontFamily: 'Attractype Reborn' }}
                >
                    Coming Soon
                </div>
            )}

            {isMobile ? (
                <div className="flex flex-col items-center" style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* SaikoLogo */}
                    <div className="w-4/4 h-screen flex flex-col justify-center items-center">
                        <img src={SaikoLogo} alt="Saiko Logo" className="w-full cursor-pointer" />

                        {/* Lottie animation */}
                        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 mb-4 pointer-events-none">
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


                    {/* SaikoFood image */}
                    <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mt-24 mb-24"
                        onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    >
                        <img src={SaikoFood} alt="Saiko Food" className="w-full cursor-pointer" />
                    </div>

                    {/* SaikoBooks image */}
                    <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24"
                        onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    >
                        <img src={SaikoBooks} alt="Saiko Books" className="w-full cursor-pointer" />
                    </div>

                    {/* SaikoToys image */}
                    <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24"
                        onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    >
                        <img src={SaikoToys} alt="Saiko Toys" className="w-full cursor-pointer" />
                    </div>

                    {/* SaikoMusic image */}
                    <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24"
                        onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    >
                        <img src={SaikoMusic} alt="Saiko Music" className="w-full cursor-pointer" />
                    </div>

                    {/* SaikoMovies image */}
                    <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24"
                        onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    >
                        <img src={SaikoMovies} alt="Saiko Movies" className="w-full cursor-pointer" />
                    </div>

                    {/* SaikoGames image */}
                    <div className="w-1/2 my-4 hover:scale-110 transform transition-transform duration-300 mb-24"
                        onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
                    >
                        <img src={SaikoGames} alt="Saiko Games" className="w-full cursor-pointer" />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-10 grid-rows-10 min-h-screen" style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* SaikoFood image */}
                    <div className="col-start-2 row-start-1 col-span-2 row-span-4 flex justify-center items-end relative">
                        <img src={SaikoFood} alt="Saiko Food" className="w-3/4 h-3/4 cursor-pointer object-contain" style={imageHoverStyle}
                            onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
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
                        <img src={SaikoBooks} alt="Saiko Books" className="w-3/4 h-3/4 cursor-pointer object-contain" style={imageHoverStyle}
                            onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
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
                        <img src={SaikoToys} alt="Saiko Toys" className="w-3/4 h-3/4 cursor-pointer object-contain" style={imageHoverStyle}
                            onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
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
                        <img src={SaikoMusic} alt="Saiko Music" className="w-3/4 h-3/4 cursor-pointer object-contain" style={imageHoverStyle}
                            onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
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
                        <img src={SaikoMovies} alt="Saiko Movies" className="w-3/4 h-3/4 cursor-pointer object-contain" style={imageHoverStyle}
                            onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
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
                        <img src={SaikoGames} alt="Saiko Games" className="w-3/4 h-3/4 cursor-pointer object-contain" style={imageHoverStyle}
                            onClick={(e) => { e.stopPropagation(); handleOverlayClick(); }}
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
            )}

            {/* Audio Player */}
            <div className={`fixed left-4 ${isMobile ? 'top-4' : 'bottom-4'}`}>
                <div className="w-64 h-20 bg-[#000]/[.3] rounded relative flex items-center p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                    <img
                        src='/saikoweblogo.png'
                        className='h-16 mr-4'
                        style={{
                            filter: isPlaying ? 'brightness(100%)' : 'grayscale(70%)',
                            transition: 'filter 0.3s ease, transform 0.3s ease',
                            transform: isPlaying ? 'scale(1)' : 'scale(0.9)'
                        }}
                    />
                    <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex flex-col">
                                <div className="text-white text-xs">SAIKO HAMSTER</div>
                                <div className="text-white text-xs font-bold">ANIME THEME</div>
                            </div>
                            <button onClick={togglePlayPause} className="w-8 h-8 items-center justify-center flex rounded-full bg-[#ef9235]" style={{ border: '1px #ffffff solid' }}>
                                {isPlaying ? PauseIcon : PlayIcon}
                            </button>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#ef9235]"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={(currentTime / duration) * 100}
                                onChange={handleProgressChange}
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed right-4 ${isMobile ? 'bottom-4' : 'bottom-4'}`}>
                <div className="gap-x-5 bg-[#000]/[.3] rounded relative flex justify-center items-center py-3 px-4" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                    <a target="blank" className="text-slate-200 text-xs" href="https://x.com/xverseapp/status/1816459497776554363?s=46&t=Cg4JLt1pMNPDfyAuPZPTBA">
                        <div
                            className="flex font-bold items-center gap-x-2 pr-3"
                            style={{ borderRight: "1px solid text-slate-500" }}
                        >
                            SWAP ON
                            <img className="w-7" style={imageHoverStyle} src="/xverse.png" onMouseEnter={(e) => {
                                e.target.style.filter = 'brightness(100%)';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                                onMouseLeave={(e) => {
                                    e.target.style.filter = 'brightness(70%)';
                                    e.target.style.transform = 'scale(1)';
                                }} />
                        </div>
                    </a>
                    <a target="blank" href="https://magiceden.io/runes/SAIKO%E2%80%A2HAMSTER">
                        <img className="w-7" style={imageHoverStyle} src="/magiceden.svg" onMouseEnter={(e) => {
                            e.target.style.filter = 'brightness(100%)';
                            e.target.style.transform = 'scale(1.1)';
                        }}
                            onMouseLeave={(e) => {
                                e.target.style.filter = 'brightness(70%)';
                                e.target.style.transform = 'scale(1)';
                            }} />
                    </a>
                    <a target="blank" href="https://t.me/saikoportal">
                        <img className="w-5" style={imageHoverStyle} src="/telegram.svg" onMouseEnter={(e) => {
                            e.target.style.filter = 'brightness(100%)';
                            e.target.style.transform = 'scale(1.1)';
                        }}
                            onMouseLeave={(e) => {
                                e.target.style.filter = 'brightness(70%)';
                                e.target.style.transform = 'scale(1)';
                            }} />
                    </a>
                    <a target="blank" href="https://x.com/SaikoHamster">
                        <img className="w-4" style={imageHoverStyle} src="/twitter.svg" onMouseEnter={(e) => {
                            e.target.style.filter = 'brightness(100%)';
                            e.target.style.transform = 'scale(1.1)';
                        }}
                            onMouseLeave={(e) => {
                                e.target.style.filter = 'brightness(70%)';
                                e.target.style.transform = 'scale(1)';
                            }} />
                    </a>
                </div>
            </div>
        </div >
    );
}

export default Hero;
