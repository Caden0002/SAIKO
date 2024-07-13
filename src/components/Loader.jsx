import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import loadingwheel from '/loadingwheel.gif'; // Adjust the path as per your project structure

function Loader(props) {
    const controls = useAnimation();
    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        // Disable scrolling on mount
        document.body.classList.add('no-scroll');

        const timeout = setTimeout(() => {
            // Enable scrolling after 5 seconds
            document.body.classList.remove('no-scroll');
            setScrollEnabled(true);
            moveUp();
        }, 2500);

        return () => {
            // Enable scrolling on unmount and clear timeout
            document.body.classList.remove('no-scroll');
            clearTimeout(timeout);
        };
    }, []);

    const moveUp = async () => {
        await controls.start({
            y: "-100%", // Move up 100%
            transition: { duration: 0.5 }
        });
    };

    return (
        <motion.div
            className="fixed h-screen bg-[#ef9235] top-0 left-0 w-full h-full flex justify-center items-center z-50"
            animate={controls}
        >
            <img
                src={loadingwheel}
                alt="Loading"
                style={{ width: '533px', height: '400px' }}
            />
        </motion.div>
    );
}

export default Loader;
