import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';

export default function NavbarWeb() {
    const [toggle, setToggle] = useState(false);

    window.onscroll = function () {
        const header = document.querySelector('#header');
        const fixNav = header.offsetTop;
        if (window.pageYOffset > fixNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    };
    const toggled = () => {
        setToggle(!toggle);
        const navMenu = document.querySelector('#nav-menu');
        navMenu.classList.toggle('hidden');
    };
    return (
        <div id='header' className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
            <div className='container'>
                <div className='flex items-center justify-between relative'>
                    <div className='px-4'>
                        <a href='/' className='font-bold text-lg text-[#14b8a6] block py-6'>
                            San Ryuu
                        </a>
                    </div>
                    <div className='flex items-center px-4'>
                        <button id='hamburger' className='block absolute right-4 lg:hidden' onClick={toggled}>
                            {toggle === true ? <IconX /> : <IconMenu2 />}
                        </button>
                        <nav
                            id='nav-menu'
                            className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                            <ul className='block lg:flex'>
                                <li className='group'>
                                    <a href='/' className='text-base text-[#0f172a] py-2 mx-8 flex group-hover:text-[#14b8a6] lg:text-white'>
                                        Home
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href='/' className='text-base text-[#0f172a] py-2 mx-8 flex group-hover:text-[#14b8a6] lg:text-white'>
                                        Profile
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href='/' className='text-base text-[#0f172a] py-2 mx-8 flex group-hover:text-[#14b8a6] lg:text-white'>
                                        Setting
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
