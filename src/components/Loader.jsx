import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { hourglass } from 'ldrs'

hourglass.register()

function Loader(props) {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation(); // Animation controls

    useEffect(() => {
        if (!loading) {
            // After 4 seconds (when loading becomes false), start fading out the loader
            controls.start({
                opacity: 0,
                transition: { duration: 2 }
            });
        }
    }, [loading, controls]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const loadingText = "Welcome to Saiko Corporation. Please wait while we load your page...";

    return (
        <motion.div
            className={`fixed bg-black h-screen top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 ${loading ? '' : 'pointer-events-none'}`}
            animate={controls}
        >
            {loading ? (
                <>

                    <l-hourglass size="50" speed="1.2" color="#F7F1A4"></l-hourglass>
                    <div className="text-amber-200 mt-12 mx-24 text-xs text-center leading-5 ">{loadingText}</div>
                </>
            ) : null}
        </motion.div>
    );
}

export default Loader;
