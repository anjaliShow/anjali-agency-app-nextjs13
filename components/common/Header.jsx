import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TitleLogo } from './Title';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu4Line } from 'react-icons/ri';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
    console.log('router.pathname', router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href={'/'}>
              <TitleLogo title="creative" caption="7" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? 'openMenu' : 'closeMenu'}
            onClick={() => setOpen(null)}
          >
            <Link
              href={'/'}
              className={activeLink === '/' ? 'activeLink' : 'none'}
            >
              Home
            </Link>
            <Link
              href={'/agency'}
              className={activeLink === '/agency' ? 'activeLink' : 'none'}
            >
              Agency
            </Link>
            <Link
              href={'/team'}
              className={activeLink === '/team' ? 'activeLink' : 'none'}
            >
              Team
            </Link>
            <Link
              href={'/services'}
              className={activeLink === '/services' ? 'activeLink' : 'none'}
            >
              Services
            </Link>
            <Link
              href={'/showcase'}
              className={activeLink === '/showcase' ? 'activeLink' : 'none'}
            >
              Showcase
            </Link>
            <Link
              href={'/blog'}
              className={activeLink === '/blog' ? 'activeLink' : 'none'}
            >
              Blog
            </Link>
            <Link
              href={'/contact'}
              className={activeLink === '/contact' ? 'activeLink' : 'none'}
            >
              Contact
            </Link>
            <Link href="/contact">
              <button className="button-primary">book a consultation</button>
            </Link>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
