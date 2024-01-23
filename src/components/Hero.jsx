import React, { useEffect, useRef } from 'react'

const Hero = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className="hero h-[70vh]">
            <div className="video w-full h-screen absolute top-0 left-0 -z-10 ">
                <video ref={videoRef} className='h-full w-full object-cover brightness-75' autoplay loop muted>
                    <source src="./video.mp4" type="video/mp4" />
                </video>
                <div className="gradient-overlay absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#141414] via-[#14141480] to-transparent"></div>
            </div>
            <div className="title absolute left-[5%] bottom-48">
                <div className="h-32 mb-5">
                    <img src="./title.png" alt="title" className="h-full" />
                </div>
                <div className="btn">
                    <button className="bg-white font-semibold rounded py-1 px-6"><i class="fa-solid fa-play"></i> Play</button>
                    <button className="bg-[rgba(194,194,194,0.35)] text-white font-semibold rounded py-1 px-6 ml-2"><i class="fa-solid fa-circle-info mr-1"></i> More Info</button>
                </div>
            </div>
            <div className='absolute right-0 bottom-48 flex gap-3'>
                <i class="fa-solid fa-volume-high text-white border-2 border-gray-400 p-1 text-sm rounded-full"></i>
                <div className='bg-[rgba(99,99,99,0.57)] text-white pl-4 pr-8 border-l-4 flex items-center'>TV-MA</div>
            </div>
        </div>
    )
}

export default Hero