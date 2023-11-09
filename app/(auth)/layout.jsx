import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/ev_corp_logo.png';
export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <Image
          src={Logo}
          className="ecorp-logo"
          alt="ECorp helpdesk logo"
          width={70}
          quality={70}
          placeholder="blur"
        />{' '}
        <h1>EvCorp helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
