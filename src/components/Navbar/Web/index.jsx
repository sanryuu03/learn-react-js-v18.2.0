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
    };
    return (
        <div id='header' className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
            <div className='container'>
                <div className='flex items-center justify-between relative'>
                    <div className='px-4'>
                        <a href='#home' className='font-bold text-lg text-[#14b8a6] block py-6'>
                            San Ryuu
                        </a>
                    </div>
                    <div className='flex items-center px-4'>
                        <button id='hamburger' className='block absolute right-4' onClick={toggled}>
                            {toggle === true ? <IconX /> : <IconMenu2 />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
