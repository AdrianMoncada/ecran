import React, { useState, useEffect } from 'react'
import { HeaderContainer } from './Header.styles'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <HeaderContainer isScrolled={isScrolled}>
                <Link href="/" className='logo'>
                    <Image src="/images/home/ecran.svg" alt='logo ecran' width={50} height={100} />
                </Link>
                <section className='links'>
                    <ScrollLink to="proximamente" smooth={true} duration={800}> <span className='link_text'>Proximamente</span></ScrollLink>
                    <ScrollLink to="sugerencias" smooth={true} duration={800}> <span className='link_text'>Sugerencias</span></ScrollLink>
                </section>
            </HeaderContainer>
        </div>
    )
}

export default Header