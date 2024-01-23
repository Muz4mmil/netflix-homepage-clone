import React, { useEffect } from 'react'

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            const scrollPosition = window.scrollY;
            const halfScreen = window.innerHeight / 2;

            if (scrollPosition > halfScreen) {
                header.classList.remove('header-bg');
                header.classList.add('header-bg-solid');
            } else {
                header.classList.remove('header-bg-solid');
                header.classList.add('header-bg');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header fixed w-full header-bg text-gray-300 z-10">
            <div className="w-[90%] flex items-center mx-auto">
                <div className="logo h-16">
                    <img src="./logo.png" className='h-full' alt="Logo" />
                </div>
                <nav>
                    <ul className='flex gap-4 text-sm ml-5'>
                        <li className='text-white font-medium'><a href="#">Home</a></li>
                        <li className='hover:text-white'><a href="#">TV Shows</a></li>
                        <li className='hover:text-white'><a href="#">Movies</a></li>
                        <li className='hover:text-white'><a href="#">News & Popular</a></li>
                        <li className='hover:text-white'><a href="#">My List</a></li>
                        <li className='hover:text-white'><a href="#">Browse by Languages</a></li>
                    </ul>
                </nav>

                <div className="flex ml-auto items-center gap-5">
                    <button className='text-xl'><i class="fa-solid fa-magnifying-glass"></i></button>
                    <div className='text-sm'>Children</div>
                    <button className='text-xl'><i class="fa-regular fa-bell"></i></button>
                    <div>
                        <img src="./user.png" className='h-7 rounded' alt="user" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

