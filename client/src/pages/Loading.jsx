import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [text, setText] = useState('');
    const [showLoad, setShowLoad] = useState(true); // boolean

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoad(false); // hide loader after 1s
            setText('I wanted 1 sec loading');
        }, 1000);

        return () => clearTimeout(timer); // cleanup
    }, []);

    if (showLoad) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#1e1c18]">
                <div className="relative w-24 h-24">
                    {/* Outer ring - white */}
                    <div className="absolute inset-0 border-4 border-t-transparent border-white rounded-full animate-spin"></div>

                    {/* Middle ring - yellow */}
                    <div className="absolute top-2 left-2 w-20 h-20 border-4 border-b-transparent border-yellow-400 rounded-full animate-[spin_3s_linear_infinite]"></div>

                    {/* Inner ring - white */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-t-transparent border-white rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
                </div>
            </div>
        );
    }

    // return (
    //     <div className="flex items-center justify-center h-screen bg-[#1e1c18] text-white text-2xl">
    //         { }
    //     </div>
    // );
};

export default Loading;
